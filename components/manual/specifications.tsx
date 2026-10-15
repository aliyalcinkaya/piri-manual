import {sectionTitles} from '@/content/manual/section-titles'
import type {Specifications as SpecificationData} from '@/content/manual/types'
import dataSources from '@/content/manual/verified-data.json'
type Source={url:string;specs:Record<string,string>;measurements:{method:string;readings:string[]}[];checkedOn:string}
export function Specifications({data,productName,manualId,liveSpecs,sourceUrl,id="specifications"}:{data:SpecificationData;productName:string;manualId:string;liveSpecs?:Record<string,string>;sourceUrl?:string;id?:string}) {
  const snapshot=(dataSources as Record<string,Source>)[manualId]
  const source=snapshot
  const names:Record<string,string>={'Dimensions':'Dimensions (H × W × D)','Lifespan':'Product Lifespan','Voltage':'Power Source','EMF Radiation':'EMF'}
  const rows=[{label:'Model',value:productName},...data.rows.filter(r=>r.label!=='Irradiance'&&(r.label!==''||!source?.specs.Wavelengths)).map(r=>({label:r.label==='Voltage'&&source?.specs['Power Source']?'Power source':r.label||'Wavelength values',value:liveSpecs?.[r.label]??liveSpecs?.[names[r.label]??r.label]??source?.specs[names[r.label]??r.label]??r.value}))]
  const capabilities=['Brightness Control','Timer','Remote Control','Pulse Control','Wavelength Group Selection','Preset Memory']
  for(const label of capabilities)if(!rows.some(row=>row.label===label)&&(liveSpecs?.[label]??source?.specs[label]))rows.push({label,value:liveSpecs?.[label]??source!.specs[label]})
  return <section id={id} className={`manual-section ${data.extraImages?.length ? "has-spec-images" : ""}`}><h2>{sectionTitles['specifications']}</h2><div className="spec-table-wrap"><table className="spec-table"><caption className="sr-only">{productName} specifications</caption><tbody>{rows.map((r,i)=><tr key={i}><th scope="row">{r.label}</th><td>{r.value}</td></tr>)}</tbody></table></div>{source?<p className="source-link">Compare with the <a href={sourceUrl??source.url}>current {productName} product page</a>.</p>:<p className="source-link">Specifications are retained from the existing manual for this earlier model. <a href="https://pirired.com.au/pages/contact">Contact Piri Red</a> to confirm your hardware revision.</p>}

  {data.extraImages?.map((image,i)=><figure className="manual-figure" key={i}><a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`}><img src={image.src} alt={image.alt} width={image.width??600} height={image.height??400} loading="lazy"/></a>{image.caption&&<figcaption>{image.caption}</figcaption>}</figure>)}</section>
}
