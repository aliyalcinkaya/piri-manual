import catalog from './store-products.json'
import type {ProductManual} from './types'

export type StoreProduct={id:string;title:string;handle:string;updatedAt?:string;featuredImage?:{url:string;altText?:string|null}|null;metafields?:({key:string;value:string;type:string}|null)[]}
export const storeProducts=catalog as Record<string,StoreProduct>
export const specificationFields:Record<string,string>={
  panel_led_technology:'LED Technology',led_power_led_count:'LED Count',panel_wavelengths:'Wavelengths',
  panel_usage_category:'Category',panel_brightness_control:'Brightness Control',panel_timer:'Timer',
  panel_remote_control:'Remote Control',panel_pulse_control:'Pulse Control',panel_wavelength_group_selection:'Wavelength Group Selection',
  panel_preset_memory:'Preset Memory',panel_colour:'Colour',panel_warranty_years:'Warranty',
  panel_beam_angle_degrees:'Beam Angle',panel_lifespan_hours:'Lifespan',panel_zero_flicker:'Zero Flicker',
  panel_emf_ut:'EMF Radiation',panel_power_source:'Power Source',panel_weight:'Weight',
}
export function primaryImageUrl(value:string){const url=new URL(value);url.searchParams.set('width','560');return url.toString()}
export function productQuery(id:string,includeMetafields=false){
  const identifiers=[...Object.keys(specificationFields),'panel_height','panel_width','panel_depth','manual_content']
  return `query { product(id:${JSON.stringify(id)}) { id title handle updatedAt featuredImage { url altText } ${includeMetafields?`metafields(identifiers:[${identifiers.map(key=>`{namespace:"custom",key:"${key}"}`).join(',')}]){key type value}`:''} } }`
}
export async function fetchStoreProduct(id:string,signal?:AbortSignal):Promise<StoreProduct|null>{
  // Only a public Storefront token belongs in this optional browser configuration.
  const token=process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_PUBLIC_TOKEN
  const response=await fetch('https://ykcommerce.myshopify.com/api/2026-10/graphql.json',{
    method:'POST',headers:{'Content-Type':'application/json',...(token?{'X-Shopify-Storefront-Access-Token':token}:{})},
    body:JSON.stringify({query:productQuery(id,Boolean(token))}),signal,
  })
  if(!response.ok)throw new Error('Product source unavailable')
  const result=await response.json()
  if(result.errors?.length)throw new Error('Product metadata access unavailable')
  return result.data?.product??null
}

function formatValue(key:string,value:string,type:string){
  if(type==='boolean')return value==='true'?'Yes':'No'
  if(key==='panel_weight'){try{const m=JSON.parse(value);return `${m.value} ${m.unit.toLowerCase()}`}catch{return value}}
  const units:Record<string,string>={panel_warranty_years:' years',panel_beam_angle_degrees:' degrees',panel_lifespan_hours:' hours',panel_emf_ut:' μT'}
  return value+(units[key]??'')
}
// Rename prose and labels while preserving stable IDs, URLs and local asset paths.
function renameText<T>(value:T,oldName:string,newName:string,key=''):T{
  if(typeof value==='string')return (['id','src','image','cardImage'].includes(key)||/^(https?:|\/)/.test(value)?value:value.split(oldName).join(newName)) as T
  if(Array.isArray(value))return value.map(v=>renameText(v,oldName,newName,key)) as T
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,renameText(v,oldName,newName,k)])) as T
  return value
}
export function applyStoreProduct(manual:ProductManual,product:StoreProduct):ProductManual{
  if(product.id!==storeProducts[manual.id]?.id)return manual
  let next=renameText(manual,manual.name,product.title)
  next={...next,name:product.title,...(product.featuredImage?.url?{cardImage:primaryImageUrl(product.featuredImage.url)}:{}),storeProductUrl:`https://pirired.com.au/products/${product.handle}`}
  // A dedicated validated JSON metafield holds the material not already in specification metafields.
  const content=product.metafields?.find(f=>f?.key==='manual_content')
  if(content){try{const parsed=manualContentSchema.parse(JSON.parse(content.value));next={...next,...parsed,liveSpecs:Object.fromEntries(parsed.specifications.rows.filter(row=>row.label).map(row=>[row.label,row.value])),readingSections:parsed.readingSections as ProductManual['readingSections']}}catch{/* Keep the reviewed snapshot if metadata is incomplete or malformed. */}}
  const specs:Record<string,string>={}
  for(const field of product.metafields??[]){if(field&&specificationFields[field.key])specs[specificationFields[field.key]]=formatValue(field.key,field.value,field.type)}
  const dimensions=['panel_height','panel_width','panel_depth'].map(key=>product.metafields?.find(f=>f?.key===key))
  if(dimensions.every(Boolean)){try{const values=dimensions.map(f=>JSON.parse(f!.value));if(values.every(v=>v.unit===values[0].unit))specs.Dimensions=values.map(v=>v.value).join(' × ')+' '+values[0].unit.toLowerCase()}catch{/* Keep existing dimensions. */}}
  if(Object.keys(specs).length){
    const aliases:Record<string,string>={'Voltage':'Power Source','Product Lifespan':'Lifespan','Dimensions (H × W × D)':'Dimensions'}
    const rows=next.specifications.rows.map(row=>({...row,value:specs[aliases[row.label]??row.label]??row.value}))
    for(const [label,value] of Object.entries(specs))if(!rows.some(row=>(aliases[row.label]??row.label)===label))rows.push({label,value})
    next={...next,specifications:{...next.specifications,rows},liveSpecs:{...next.liveSpecs,...specs}}
    const years=Number(product.metafields?.find(f=>f?.key==='panel_warranty_years')?.value)
    if(Number.isInteger(years)&&years>0&&years<100)next.warrantyYears=years
  }
  return next
}

import {z} from 'zod'
const asset=z.string().refine(v=>v.startsWith('/')&&!v.startsWith('//')||/^https:\/\/(cdn\.shopify\.com|pirired\.com\.au)\//.test(v),'Use a local or Shopify asset')
const image=z.object({src:asset,alt:z.string(),caption:z.string().optional(),width:z.number().positive().optional(),height:z.number().positive().optional()})
const step=z.object({title:z.string().min(1),subtitle:z.string().optional(),bullets:z.array(z.string()).min(1),note:z.string().optional(),image:image.optional(),images:z.array(image).optional()})
export const manualContentSchema=z.object({
  tagline:z.string().min(1),features:z.array(z.string()).min(1),
  packageContents:z.array(z.object({label:z.string().min(1),image:asset})).min(1),
  howToUse:z.object({intro:z.string().min(1),diagram:image.optional(),steps:z.array(step).min(1),remoteControl:z.object({title:z.string(),intro:z.string().optional(),steps:z.array(step),image:image.optional()}).optional()}),
  specifications:z.object({rows:z.array(z.object({label:z.string(),value:z.string()})).min(5),certifications:z.array(z.string()),extraImages:z.array(image).optional()}),
  additionalFeatures:z.array(z.object({title:z.string(),body:z.string().optional(),steps:z.array(z.string()).optional()})).optional(),
  readingSections:z.object(Object.fromEntries(['treatment-guide','maintenance','faq','advanced-features','additional-features','what-is-red-light','warranty'].map(id=>[id,z.object({blocks:z.array(z.discriminatedUnion('type',[
    z.object({type:z.literal('paragraph'),text:z.string()}),z.object({type:z.literal('heading'),text:z.string()}),z.object({type:z.literal('list'),items:z.array(z.string())}),
    z.object({type:z.literal('question'),title:z.string(),text:z.string()}),z.object({type:z.literal('link'),text:z.string(),url:z.string().url().refine(v=>/^https:\/\//.test(v),'Use HTTPS links')})
  ])).min(1)}).optional()]))).optional(),
  measurements:z.array(z.object({method:z.string(),readings:z.array(z.string())})).optional(),
  wavelengthCount:z.union([z.literal(2),z.literal(5)]),showDualChipScience:z.boolean(),showAdvancedFeatures:z.boolean(),warrantyYears:z.number().int().positive().max(99),
})
