'use client'
import {useEffect,useRef,useState} from 'react'
export type OutputGraph={src:string;geometrySrc:string;instrument:string;sourceUrl:string;canvasWidth:number;canvasTop:number;canvasHeight:number;stations:{x:number;width:number;height:number;distance:number;irradiance?:number|null;overLimit?:boolean}[]}
export function IrradianceChart({graph,portable}:{graph:OutputGraph;portable:boolean}) {
 const ref=useRef<HTMLDivElement>(null)
 const [width,setWidth]=useState(800)
 useEffect(()=>{const el=ref.current;if(!el)return;const observer=new ResizeObserver(([entry])=>setWidth(entry.contentRect.width));observer.observe(el);return()=>observer.disconnect()},[])
 // Keep enough horizontal room for 16px dimensions; only geometry scales.
 const minimumScale=portable?.8:.7
 const scale=Math.max(minimumScale,width/graph.canvasWidth)
 const splitBoundary=(graph.stations[0].x+graph.stations[1].x)/2
 const fixedOrigin=graph.stations[0].x-125
 const split=width<graph.canvasWidth*minimumScale
 const stage=(origin:number,units:number,fixed=false)=>{
  const stations=graph.stations.filter(s=>fixed?s.distance===0:origin===0||s.distance>0)
  return <div className={'manual-output-stage'+(fixed?' manual-output-fixed-stage':'')} style={{width:units*scale,height:graph.canvasHeight*scale}}>
   <svg viewBox={origin+' '+graph.canvasTop+' '+units+' '+graph.canvasHeight} aria-hidden="true" className="manual-output-geometry"><image href={graph.geometrySrc} x="0" y={graph.canvasTop} width={graph.canvasWidth} height={graph.canvasHeight}/></svg>
   {stations.map(s=><div key={s.distance}>
    {s.distance>0&&<span className="manual-output-reading" style={{left:(s.x-origin)*scale,top:((portable?690:445)-graph.canvasTop)*scale}}><span>{s.overLimit?'Over device limit':Number(s.irradiance?.toFixed(1))}</span>{!s.overLimit&&<span>mW/cm²</span>}</span>}
    <span className="manual-output-dimension" style={{left:(s.x-origin)*scale,top:(814-graph.canvasTop)*scale}}><span>{s.width}</span><span>x</span><span>{s.height}mm</span></span>
    <span className="manual-output-distance" style={{left:(s.x-origin)*scale,top:(876-graph.canvasTop)*scale}}>{s.distance===0?'0':s.distance+' mm'}</span>
   </div>)}
  </div>
 }
 return <div ref={ref} className="manual-output-responsive">
  <p className="manual-output-axis-labels">Coverage Area · Distance from Panel</p>
  {split&&<p className="manual-output-hint">Scroll horizontally to see all distances.</p>}
  <div className="manual-output-readable-rail" tabIndex={split?0:undefined} role={split?'region':undefined} aria-label={split?'Irradiance and coverage by distance':undefined}>
   {split?<>{stage(fixedOrigin,splitBoundary-fixedOrigin,true)}{stage(splitBoundary,graph.canvasWidth-splitBoundary)}</>:stage(0,graph.canvasWidth)}
  </div>
 </div>
}

