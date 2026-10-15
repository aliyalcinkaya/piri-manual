import {sectionTitles} from '@/content/manual/section-titles'
import type {ReadingSection} from '@/content/manual/types'
export function MetadataSection({id,section,excludeParagraph,domId}:{id:keyof typeof sectionTitles;section:ReadingSection;excludeParagraph?:string;domId?:string}){
  return <section id={domId??id} className="manual-section"><h2>{sectionTitles[id]}</h2>{section.blocks.map((block,index)=>{
    if(block.type==='paragraph'&&block.text===excludeParagraph)return null
    if(block.type==='heading')return <h3 key={index}>{block.text}</h3>
    if(block.type==='list')return <ul key={index}>{block.items.map((item,i)=><li key={i}>{item}</li>)}</ul>
    if(block.type==='question')return <details className="metadata-question" key={index}><summary>{block.title}</summary><p>{block.text}</p></details>
    if(block.type==='link')return <p key={index}><a href={block.url}>{block.text}</a></p>
    return <p key={index}>{block.text}</p>
  })}</section>
}
