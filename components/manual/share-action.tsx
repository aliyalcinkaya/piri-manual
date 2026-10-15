'use client'
import {useState} from 'react'
import {Share2,Printer,X} from 'lucide-react'
import {nativeShare} from './native-share'
export function ShareAction({name,iconOnly=false}:{name:string;iconOnly?:boolean}) {
  const [fallback,setFallback]=useState(false)
  const [url,setUrl]=useState('')
  const [message,setMessage]=useState('')
  async function share(){
    const link=window.location.href.split('#')[0];setUrl(link)
    const result=await nativeShare({title:`${name} User Manual`,url:link},navigator.share?.bind(navigator))
    if(result!=='fallback')return
    setFallback(true)
  }
  return <><button type="button" className={iconOnly?"sticky-share-button":"print-button mobile-share"} aria-label="Share Manual" title="Share Manual" onClick={share}><Share2 size={20} aria-hidden="true"/>{!iconOnly&&"Share"}</button>{fallback&&<div className="share-options" role="region" aria-label="Share Manual"><div><strong>Share Manual</strong><button type="button" aria-label="Close Share Options" onClick={()=>{setFallback(false);setMessage('')}}><X size={18} aria-hidden="true"/></button></div><p>Your browser’s share sheet is unavailable. Choose an option:</p><a href={`mailto:?subject=${encodeURIComponent(`${name} User Manual`)}&body=${encodeURIComponent(url)}`}>Email</a><a href={`https://wa.me/?text=${encodeURIComponent(`${name} User Manual ${url}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(url);setMessage('Link copied.')}catch{setMessage(`Copy this link: ${url}`)}}}>Copy Link</button><p role="status">{message}</p></div>}</>
}
