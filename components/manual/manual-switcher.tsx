'use client'
import {useEffect,useRef,useState} from 'react'
import Link from 'next/link'
import {createPortal} from 'react-dom'
import {ChevronDown} from 'lucide-react'
import {productList} from '@/content/manual/index'
export function ManualSwitcher({id,name}:{id:string;name:string}){
  const [open,setOpen]=useState(false)
  const [position,setPosition]=useState({left:0,top:0,maxHeight:360})
  const root=useRef<HTMLDivElement>(null)
  const trigger=useRef<HTMLButtonElement>(null)
  const panelId=`manual-switcher-${id}`
  function show(){const bounds=root.current?.getBoundingClientRect();if(!bounds)return;const top=bounds.bottom+8;setPosition({left:Math.max(10,Math.min(bounds.left,window.innerWidth-280)),top,maxHeight:Math.max(100,Math.min(360,window.innerHeight-top-20))});setOpen(true)}
  useEffect(()=>{if(!open)return;const outside=(event:PointerEvent)=>{if(root.current&&!root.current.contains(event.target as Node)&&!document.getElementById(panelId)?.contains(event.target as Node))setOpen(false)};const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);trigger.current?.focus()}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape)}},[open])
  return <div className="manual-switcher" ref={root}><div className="manual-name-row"><h1 id="manual-title">{name}</h1><button ref={trigger} type="button" className="manual-switch-trigger" aria-label="Choose Another Manual" aria-expanded={open} aria-controls={panelId} onClick={()=>open?setOpen(false):show()} onKeyDown={event=>{if(event.key==='ArrowDown'){event.preventDefault();show();requestAnimationFrame(()=>document.getElementById(panelId)?.querySelector<HTMLAnchorElement>('a')?.focus())}}}><ChevronDown size={18} aria-hidden="true"/></button></div>{open&&createPortal(<nav id={panelId} className="manual-switch-list" style={{position:'fixed',...position}} aria-label="Other Product Manuals" onBlur={event=>{if(!root.current?.contains(event.relatedTarget as Node|null)&&!event.currentTarget.contains(event.relatedTarget as Node|null))setOpen(false)}}>{productList.filter(product=>product.id!==id).map(product=><Link key={product.id} href={`/manual/${product.id}/`} onClick={()=>setOpen(false)}><span>{product.name}</span><img src={product.cardImage} alt="" width="40" height="44" loading="lazy"/></Link>)}</nav>,document.body)}</div>
}
