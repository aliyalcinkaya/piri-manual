'use client'
import {useEffect,useRef,useState} from 'react'
import Link from 'next/link'
import {ArrowRight,ChevronLeft,ChevronRight} from 'lucide-react'
import type {ProductManual} from '@/content/manual/types'
export function LibraryCarousel({products}:{products:ProductManual[]}){
  const track=useRef<HTMLDivElement>(null)
  const gesture=useRef<{x:number;scroll:number;dragged:boolean}|null>(null)
  const suppressClick=useRef(false)
  const [stops,setStops]=useState<number[]>([0]);const [active,setActive]=useState(0)
  const keys=products.map(p=>p.id).join(',')
  function sync(){const el=track.current;if(!el)return;const max=Math.max(0,el.scrollWidth-el.clientWidth);const first=el.querySelector('article');const stride=(first?.getBoundingClientRect().width??285)+parseFloat(getComputedStyle(el).columnGap||'24');const positions=[0];for(let offset=stride;offset<max-1;offset+=stride)positions.push(offset);if(max>1)positions.push(max);setStops(positions);setActive(positions.reduce((nearest,offset,index)=>Math.abs(offset-el.scrollLeft)<Math.abs(positions[nearest]-el.scrollLeft)?index:nearest,0))}
  useEffect(()=>{const el=track.current;if(!el)return;el.scrollLeft=0;sync();const observer=new ResizeObserver(sync);observer.observe(el);return()=>observer.disconnect()},[keys])
  useEffect(()=>{const mousemove=(event:MouseEvent)=>{const start=gesture.current;const el=track.current;if(!start||!el)return;const delta=event.clientX-start.x;if(Math.abs(delta)>7)start.dragged=true;if(start.dragged){event.preventDefault();el.classList.add('is-dragging');el.scrollLeft=start.scroll-delta;suppressClick.current=true}};const stop=()=>{gesture.current=null;track.current?.classList.remove('is-dragging')};window.addEventListener('mousemove',mousemove);window.addEventListener('mouseup',stop);window.addEventListener('blur',stop);return()=>{window.removeEventListener('mousemove',mousemove);window.removeEventListener('mouseup',stop);window.removeEventListener('blur',stop)}},[])
  function goTo(index:number){const el=track.current;if(el)el.scrollTo({left:stops[index],behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
  return <div className="carousel"><div ref={track} id="manual-card-track" className="manual-card-track" role="region" aria-label="Product Manuals" tabIndex={0} onScroll={sync}
    onDragStart={event=>event.preventDefault()}
    onMouseDown={event=>{if(event.button!==0)return;suppressClick.current=false;gesture.current={x:event.clientX,scroll:event.currentTarget.scrollLeft,dragged:false}}}
    onClickCapture={event=>{if(suppressClick.current){event.preventDefault();event.stopPropagation();suppressClick.current=false}}}>
    {products.map((p,index)=><article key={p.id} className="library-product-card"><Link href={`/manual/${p.id}/`} className="library-card-link" draggable={false}><div className="library-card-photo"><img src={p.cardImage} alt="" width="285" height="200" loading={index<3?'eager':'lazy'} draggable={false}/></div><div className="library-card-copy"><h3>{p.name}</h3><p>{p.tagline}</p><span className="device-action">Open Manual <ArrowRight size={18} aria-hidden="true"/></span></div></Link></article>)}
  </div>{stops.length>1&&<div className="carousel-controls" role="group" aria-label="Browse Manuals"><button className="carousel-arrow" type="button" onClick={()=>goTo(active-1)} disabled={active===0} aria-label="Previous Manuals" aria-controls="manual-card-track"><ChevronLeft size={16} aria-hidden="true"/></button><div className="carousel-dots">{stops.map((_,index)=><button key={index} className="carousel-dot" type="button" aria-label={`Go to manual position ${index+1} of ${stops.length}`} aria-current={index===active?'true':undefined} aria-controls="manual-card-track" onClick={()=>goTo(index)}><span aria-hidden="true"/></button>)}</div><button className="carousel-arrow" type="button" onClick={()=>goTo(active+1)} disabled={active===stops.length-1} aria-label="Next Manuals" aria-controls="manual-card-track"><ChevronRight size={16} aria-hidden="true"/></button></div>}</div>
}
