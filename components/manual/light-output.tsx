import {sectionTitles} from '@/content/manual/section-titles'
import type {Specifications as SpecificationData} from '@/content/manual/types'
import {IrradianceChart,type OutputGraph} from './irradiance-chart'
import graphs from '@/content/manual/irradiance-graphs.json'
import {deviceGuidance} from '@/content/manual/layout-groups'

export function LightOutput({manualId,sourceUrl}:{data:SpecificationData;manualId:string;sourceUrl?:string;measurements?:{method:string;readings:string[]}[]}) {
 const graph=(graphs as Record<string,OutputGraph>)[manualId]
 const url=sourceUrl??graph?.sourceUrl
 const tabUrl=url ? url.split('#')[0]+'#irradiance' : undefined
 const method=graph?.instrument==='spectrometer'?'Spectrometer':'Solar Meter'
 return <section id="light-output" className="manual-section"><h2>{sectionTitles['light-output']}</h2>
 {graph ? <><figure className="manual-output-chart" aria-label={method+' irradiance and coverage by distance'}>
 <figcaption>{method} · Red + NIR</figcaption>
 <img className="manual-output-desktop" src={graph.src} alt={method+' irradiance and projected coverage dimensions at each measured distance'} width={graph.canvasWidth} height={Math.ceil(graph.canvasHeight)}/>
 <IrradianceChart graph={graph} portable={manualId==='piri-portable'}/></figure>
 <p className="device-guidance">{deviceGuidance}</p>
 <p>Values vary with distance and measurement method. These measurements describe light output, not a treatment prescription.</p>
 </> : <><p className="device-guidance">{deviceGuidance}</p><p className={manualId==='piri-max-pro-v0'?undefined:'reference-note'}>Verified measurement data for this earlier model is unavailable. Contact Piri Red for model-specific light-output information.</p></>}
 {tabUrl&&<p className="source-link"><a href={tabUrl}>Go To Product Irradiance Tab</a>.</p>}
 </section>
}


