import {sectionTitles} from '@/content/manual/section-titles'
import type {PackageItem} from '@/content/manual/types'
export function PackageContents({items,id="package-contents"}:{items:PackageItem[];id?:string}) {
  return <section id={id} className="manual-section"><h2>{sectionTitles['package-contents']}</h2><p className="section-intro">Check the contents before you begin.</p><ul className="package-list">{items.map(item=><li key={item.label}>{item.image!=='/placeholder.svg'?<img src={item.image} alt="" width="120" height="100" loading="lazy"/>:<div className="package-placeholder">Included accessory</div>}<span>{item.label}</span></li>)}</ul></section>
}
