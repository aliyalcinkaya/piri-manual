'use client'
import { useEffect,useState } from 'react'
export interface NavSection { id:string; title:string }
export function Navigation({sections,onNavigate}:{sections:NavSection[];onNavigate?:()=>void}) {
  const [active,setActive]=useState('')
  useEffect(()=>{const sync=()=>setActive(location.hash.slice(1));sync();window.addEventListener('hashchange',sync);const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible[0])setActive(visible[0].target.id)},{rootMargin:'-100px 0px -55% 0px',threshold:0});sections.forEach(s=>{const el=document.getElementById(s.id);if(el)observer.observe(el)});return()=>{window.removeEventListener('hashchange',sync);observer.disconnect()}},[sections])
  return <nav className="contents-nav" aria-label="Manual contents"><p className="contents-heading">In This Manual</p><ol>{sections.map(s=><li key={s.id}><a href={`#${s.id}`} aria-current={active===s.id?'location':undefined} onClick={()=>{setActive(s.id);onNavigate?.()}}>{s.title}</a></li>)}</ol></nav>
}
