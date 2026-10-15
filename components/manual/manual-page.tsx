'use client'
import {useMemo,useRef,useEffect,useState} from 'react'
import Link from 'next/link'
import {ArrowLeft,ArrowRight,ArrowUpRight,Printer,ChevronDown} from 'lucide-react'
import {ManualSwitcher} from './manual-switcher'
import {ContactButton} from '@/components/contact-button'
import {SiteHeader,SiteFooter} from '@/components/site-header'
import {Navigation,type NavSection} from './navigation'
import {PackageContents} from './package-contents'
import {HowToUse} from './how-to-use'
import {TreatmentGuide} from './treatment-guide'
import {RedLightTherapy} from './red-light-therapy'
import {MaintenanceSafety} from './maintenance-safety'
import {Disclaimer} from './disclaimer'
import {FAQ} from './faq'
import {Specifications} from './specifications'
import {LightOutput} from './light-output'
import {Warranty} from './warranty'
import {AdvancedFeatures} from './advanced-features'
import {AdditionalFeatures} from './additional-features'
import {productUrl,supportUrl} from '@/content/manual/links'
import {MetadataSection} from './metadata-section'
import {ShareAction} from './share-action'
import {sectionTitles} from '@/content/manual/section-titles'
import {useLiveManual} from '@/content/manual/use-live-product'
import {desktopManualGroup,extendedPrintGroup,proManualGroup,deviceGuidance} from '@/content/manual/layout-groups'
import type {ProductManual} from '@/content/manual/types'
export function ManualPage({manual:initialManual}:{manual:ProductManual}) {
  const manual=useLiveManual(initialManual)
  useEffect(()=>{
    let collapsed:HTMLDetailsElement[]=[]
    const prepare=()=>{
      if(collapsed.length)return
      collapsed=Array.from(document.querySelectorAll<HTMLDetailsElement>('.manual-content details:not([open])'))
      collapsed.forEach(detail=>{detail.open=true})
    }
    const restore=()=>{collapsed.forEach(detail=>{detail.open=false});collapsed=[]}
    window.addEventListener('beforeprint',prepare)
    window.addEventListener('afterprint',restore)
    return()=>{window.removeEventListener('beforeprint',prepare);window.removeEventListener('afterprint',restore);restore()}
  },[])
  const [currentSection,setCurrentSection]=useState('In The Box')
  const manualRail=useRef<HTMLElement>(null)
  const mobileContents=useRef<HTMLDetailsElement>(null);const source=manual.storeProductUrl??productUrl(manual.id)
  const sections=useMemo(()=>{
    const s:NavSection[]=[{id:'package-contents',title:sectionTitles['package-contents']},{id:'specifications',title:sectionTitles['specifications']},{id:'how-to-use',title:sectionTitles['how-to-use']},{id:'treatment-guide',title:sectionTitles['treatment-guide']},{id:'light-output',title:sectionTitles['light-output']},{id:'maintenance',title:sectionTitles['maintenance']}]
    const additionalControls:NavSection={id:'additional-features',title:sectionTitles['additional-features']}
    const hasAdditional=!!(manual.additionalFeatures?.length||manual.readingSections?.['additional-features'])
    if(hasAdditional&&manual.id!=='piri-prime')s.push(additionalControls)
    s.push({id:'what-is-red-light',title:sectionTitles['what-is-red-light']})
    s.push({id:'disclaimer',title:'Disclaimer'})
    if(hasAdditional&&manual.id==='piri-prime')s.push(additionalControls)
    if(manual.showAdvancedFeatures||manual.readingSections?.['advanced-features'])s.push({id:'advanced-features',title:sectionTitles['advanced-features']})
    s.push({id:'faq',title:sectionTitles['faq']},{id:'warranty',title:sectionTitles['warranty']})
    return s
  },[manual])
  useEffect(()=>{const update=()=>{let current=sections[0];for(const section of sections){const element=document.getElementById(section.id);if(element&&element.getBoundingClientRect().top<=150)current=section}setCurrentSection(document.getElementById(current.id)?.querySelector('h2')?.textContent?.trim()||current.title)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[sections])
  useEffect(()=>{const update=()=>{const footer=document.querySelector('.site-footer');if(!footer)return;const footerTop=footer.getBoundingClientRect().top;const label=document.querySelector('.manual-end .text-link span');const bottom=Math.max(24,footerTop<window.innerHeight&&label?window.innerHeight-label.getBoundingClientRect().bottom:window.innerHeight-footerTop+25);manualRail.current?.style.setProperty('--rail-bottom',`${bottom}px`)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);const observer=new ResizeObserver(update);const main=document.querySelector('.manual-main');const footer=document.querySelector('.site-footer');if(main)observer.observe(main);if(footer)observer.observe(footer);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);observer.disconnect()}},[])
  return <><SiteHeader/><main id="main-content" className={`manual-main ${proManualGroup.has(manual.id)?'pro-manual':''}`} data-manual-id={manual.id}><div className="manual-breadcrumb"><Link href="/"><ArrowLeft size={15} aria-hidden="true"/>All manuals</Link><span aria-hidden="true">/</span><span>{manual.name}</span></div><div className="mobile-section-heading" aria-label="Current manual section"><span>{currentSection}</span><ShareAction name={manual.name} iconOnly/></div><style dangerouslySetInnerHTML={{__html:`@page { @top-center { content: ${JSON.stringify(`Product Manual - ${manual.name}`).replace(/</g,"\\3c ")}; } }`}}/><div className={`print-cover ${manual.packageContents.length>5?"print-cover-many-items":""}`}><div className="print-cover-left"><h1>{manual.name}</h1><img className="print-cover-product" src={manual.cardImage} alt={manual.name} width="280" height="280"/><PackageContents id="print-package-contents" items={manual.packageContents}/></div><div className="print-cover-right"><Specifications id="print-specifications" data={manual.specifications} productName={manual.name} manualId={manual.id} liveSpecs={manual.liveSpecs} sourceUrl={manual.storeProductUrl}/></div></div><div className="manual-layout"><aside className="desktop-contents" ref={manualRail}><div className="manual-rail-content"><section className="manual-product-card" aria-labelledby="manual-title"><div className="manual-product-heading"><ManualSwitcher id={manual.id} name={manual.name}/><button type="button" className="product-print-icon" aria-label="Print Manual" title="Print / Save PDF" onClick={()=>window.print()}><Printer size={25} strokeWidth={2.75} aria-hidden="true"/></button></div><div className="manual-device-photo"><img src={manual.cardImage} alt={manual.name} width="280" height="240" fetchPriority="high"/></div></section><details className="mobile-contents" ref={mobileContents}><summary>Explore this manual <ChevronDown size={18} aria-hidden="true"/></summary><Navigation sections={sections} onNavigate={()=>{if(mobileContents.current)mobileContents.current.open=false}}/></details><Navigation sections={sections}/></div><div className="manual-rail-actions"><button type="button" className="print-button desktop-print" onClick={()=>window.print()}><Printer size={16} aria-hidden="true"/>Print / Save PDF</button><ContactButton className="manual-contact-button"/></div></aside><article className={`manual-content ${desktopManualGroup.has(manual.id)?'desktop-manual-group':''} ${manual.id==='piri-portable'?'portable-manual-group':''} ${extendedPrintGroup.has(manual.id)?'extended-print-flow':''} ${manual.id==='piri-prime'?'prime-print-flow':''}`} aria-label={`${manual.name} instructions`}>{!source&&manual.id!=='piri-max-pro-v0'&&<div className="reference-note"><h2>An earlier model</h2><p>This manual is retained for existing {manual.name} owners. For a model-specific question, <a href={supportUrl}>contact Piri Red</a> with a photo of your device label.</p></div>}<PackageContents items={manual.id==='piri-origin-pro'?manual.packageContents.map(item=>item.label==='Remote Control'?{...item,image:'/shared-controls/standard-remote-front.png'}:item):manual.packageContents}/><Specifications data={manual.specifications} productName={manual.name} manualId={manual.id} liveSpecs={manual.liveSpecs} sourceUrl={manual.storeProductUrl}/><HowToUse data={manual.howToUse} manualId={manual.id}/>{manual.readingSections?.['treatment-guide']?<MetadataSection id="treatment-guide" section={manual.readingSections['treatment-guide']!} excludeParagraph={deviceGuidance}/>:(<TreatmentGuide manualId={manual.id}/>)}<LightOutput data={manual.specifications} manualId={manual.id} sourceUrl={manual.storeProductUrl} measurements={manual.measurements}/><div className="care-reading-sheet">{manual.readingSections?.['maintenance']?<MetadataSection id="maintenance" section={manual.readingSections['maintenance']!}/>:(<MaintenanceSafety/>)}{manual.id!=='piri-prime'&&(manual.readingSections?.['additional-features']?<MetadataSection id="additional-features" section={manual.readingSections['additional-features']!}/>:(<AdditionalFeatures cards={manual.additionalFeatures??[]}/>))}<div className="about-light-with-disclaimer">{manual.readingSections?.['what-is-red-light']?<MetadataSection id="what-is-red-light" section={manual.readingSections['what-is-red-light']!}/>:(<RedLightTherapy wavelengthCount={manual.wavelengthCount} showDualChipScience={manual.showDualChipScience} wavelengths={manual.liveSpecs?.Wavelengths}/>)}<Disclaimer/></div>{manual.id==='piri-prime'&&(manual.readingSections?.['additional-features']?<MetadataSection id="additional-features" section={manual.readingSections['additional-features']!}/>:(<AdditionalFeatures cards={manual.additionalFeatures??[]}/>))}</div>{manual.id==='piri-prime'&&<div className="prime-additional-print">{manual.readingSections?.['additional-features']?<MetadataSection id="additional-features" domId="prime-additional-controls-print" section={manual.readingSections['additional-features']!}/>:<AdditionalFeatures id="prime-additional-controls-print" cards={manual.additionalFeatures??[]}/>}</div>}{manual.readingSections?.['advanced-features']?<MetadataSection id="advanced-features" section={manual.readingSections['advanced-features']!}/>:(<AdvancedFeatures show={manual.showAdvancedFeatures}/>)}{manual.readingSections?.['faq']?<MetadataSection id="faq" section={manual.readingSections['faq']!}/>:(<FAQ manual={manual}/>)}{manual.readingSections?.['warranty']?<MetadataSection id="warranty" section={manual.readingSections['warranty']!}/>:(<Warranty warrantyYears={manual.warrantyYears}/>)}<div className="manual-end"><Link href="/" className="text-link"><span>Back To All Manuals</span> <ArrowRight size={17} aria-hidden="true"/></Link></div></article></div></main><SiteFooter/></>
}
