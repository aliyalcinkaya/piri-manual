'use client'
import {useEffect,useState} from 'react'
import {applyStoreProduct,fetchStoreProduct,storeProducts,type StoreProduct} from './storefront'
import type {ProductManual} from './types'
const pending=new Map<string,Promise<StoreProduct|null>>()
export function useLiveManual(snapshot:ProductManual){
  const [manual,setManual]=useState(snapshot)
  useEffect(()=>{
    let mounted=true
    const id=storeProducts[snapshot.id]?.id
    if(!id)return
    const refresh=()=>{
      const request=pending.get(id)??fetchStoreProduct(id)
      pending.set(id,request)
      request.then(async product=>{if(!mounted||!product)return;const next=applyStoreProduct(snapshot,product);if(next.cardImage!==snapshot.cardImage){const image=new Image();image.src=next.cardImage;try{await image.decode()}catch{next.cardImage=snapshot.cardImage}}if(mounted)setManual(next)}).catch(()=>{/* The reviewed offline snapshot stays readable. */}).finally(()=>{if(pending.get(id)===request)pending.delete(id)})
    }
    refresh();const interval=window.setInterval(refresh,60000)
    const visible=()=>{if(document.visibilityState==='visible')refresh()}
    document.addEventListener('visibilitychange',visible)
    return()=>{mounted=false;clearInterval(interval);document.removeEventListener('visibilitychange',visible)}
  },[snapshot])
  return manual.id===snapshot.id?manual:snapshot
}
