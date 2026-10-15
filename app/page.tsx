'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react'
import {applyStoreProduct,fetchStoreProduct,storeProducts} from '@/content/manual/storefront'
import type {ProductManual} from '@/content/manual/types'
import {getManual} from '@/content/manual/index'
import {manuals} from '@/content/manual/index'
import {sizes,chips,matchesFilters} from '@/content/manual/library-filters'
import {LibraryCarousel} from '@/components/manual/library-carousel'
import { legacyNames, supportUrl } from '@/content/manual/links'
import {ContactButton} from '@/components/contact-button'
import { SiteHeader, SiteFooter } from '@/components/site-header'
export default function ProductSelection() {
  const [liveProducts,setLiveProducts]=useState<Record<string,ProductManual>>({})
  useEffect(()=>{let active=true;const refresh=()=>Promise.allSettled(Object.entries(storeProducts).map(async([key,product])=>{const result=await fetchStoreProduct(product.id);const snapshot=getManual(key);return [key,result&&snapshot?applyStoreProduct(snapshot,result):undefined] as const})).then(results=>{if(active)setLiveProducts(Object.fromEntries(results.flatMap(result=>result.status==='fulfilled'&&result.value[1]?[[result.value[0],result.value[1]] as [string,ProductManual]]:[])))});refresh();const interval=window.setInterval(refresh,60000);return()=>{active=false;clearInterval(interval)}},[])
  const [query,setQuery]=useState('');const [selectedSizes,setSizes]=useState<string[]>([]);const [selectedChips,setChips]=useState<string[]>([])
  useEffect(()=>{const sync=()=>{const params=new URLSearchParams(location.search);setQuery(params.get('q')??'');const selected=params.getAll('size').filter(value=>sizes.includes(value as typeof sizes[number]));const legacy=params.get('group');setSizes(selected.length?selected:legacy==='Compact'?['Portable','Desktop']:legacy==='Full-size'?['Full Size Panels']:[]);setChips(params.getAll('chip').filter(value=>chips.includes(value as typeof chips[number])))};sync();window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync)},[])
  function update(q:string,nextSizes:string[],nextChips:string[]){setQuery(q);setSizes(nextSizes);setChips(nextChips);const params=new URLSearchParams();if(q)params.set('q',q);nextSizes.forEach(value=>params.append('size',value));nextChips.forEach(value=>params.append('chip',value));history.replaceState(null,'',params.size?`/?${params}`:'/')}
  const toggle=(values:string[],value:string)=>values.includes(value)?values.filter(item=>item!==value):[...values,value]
  const ordered=Object.values(manuals).map(product=>liveProducts[product.id]??product)
  const filtered=ordered.filter(product=>matchesFilters(product,query,selectedSizes,selectedChips))
  const active=Boolean(query||selectedSizes.length||selectedChips.length)
  return <><SiteHeader/><main id="main-content" className="library-main">
    <header className="library-page-heading"><h1>All Manuals</h1><div className="library-heading-actions"><p>Find the manual for your Piri Panel</p><ContactButton/></div></header>
    <section id="device-library" className="library-browser" aria-label="Manual Library"><aside className="library-search-rail"><h2>Find Your Manual</h2><div className="search-field"><Search size={19} aria-hidden="true"/><label className="sr-only" htmlFor="device-search">Search Devices Or Former Model Names</label><input id="device-search" type="search" name="q" autoComplete="off" placeholder="Search Your Model…" value={query} onChange={event=>update(event.target.value,selectedSizes,selectedChips)}/>{query&&<button type="button" aria-label="Clear Search" onClick={()=>update('',selectedSizes,selectedChips)}><X size={17} aria-hidden="true"/></button>}</div>
      <div className="library-filter-groups"><fieldset><legend>Size</legend>{sizes.map(size=><label key={size}><input type="checkbox" name="size" value={size} checked={selectedSizes.includes(size)} onChange={()=>update(query,toggle(selectedSizes,size),selectedChips)}/><span>{size}</span></label>)}</fieldset><fieldset><legend>Chip Technology</legend>{chips.map(chip=><label key={chip}><input type="checkbox" name="chip" value={chip} checked={selectedChips.includes(chip)} onChange={()=>update(query,selectedSizes,toggle(selectedChips,chip))}/><span>{chip}</span></label>)}</fieldset></div>
      <button type="button" className="clear-library-filters" disabled={!active} onClick={()=>update('',[],[])}>Clear Filters <X size={15} aria-hidden="true"/></button>
    </aside><div className="library-results"><div className="library-results-heading"><h2>Your Manual Library</h2><p className="result-count" aria-live="polite" aria-atomic="true">{filtered.length} {filtered.length===1?'Manual':'Manuals'}</p></div>{filtered.length?<LibraryCarousel products={filtered}/>:<div className="empty-state"><h3>No Matching Device</h3><p>Try another model name or clear your filters to browse every manual.</p><button type="button" className="button-primary" onClick={()=>update('',[],[])}>Show All Manuals</button></div>}</div></section>

  </main><SiteFooter/></>
}
