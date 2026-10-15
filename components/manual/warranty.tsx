import {sectionTitles} from '@/content/manual/section-titles'
import {returnsUrl} from '@/content/manual/links'
export function Warranty({warrantyYears}:{warrantyYears:number}) {
  return <section id="warranty" className="manual-section"><h2>{sectionTitles['warranty']}</h2><div className="warranty-columns"><div><h3>{warrantyYears}-year limited warranty</h3><p>The warranty covers material and manufacturing defects under normal use. Keep your proof of purchase and contact Piri Red for a claim.</p></div><div><h3>30-day returns</h3><p>The store’s return period runs from the purchase date. Eligibility, condition, packaging and proof-of-purchase requirements apply.</p></div></div><p>For current terms and the returns process, read the <a href={returnsUrl}>warranty, returns & refunds policy</a>.</p></section>
}
