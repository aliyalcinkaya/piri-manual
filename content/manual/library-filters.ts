import type {ProductManual} from './types'
import {legacyNames} from './links'
export const sizes=['Portable','Desktop','Full Size Panels'] as const
export const chips=['Mono Chip','Dual Chip'] as const
export type Size=typeof sizes[number]
export type Chip=typeof chips[number]
export function productSize(id:string):Size{return id==='piri-portable'?'Portable':['piri-desktop-500','piri-core-pro','piri-origin','piri-origin-pro'].includes(id)?'Desktop':'Full Size Panels'}
export function productChip(product:ProductManual):Chip|undefined{
  const value=product.liveSpecs?.['LED Technology']??product.specifications.rows.find(row=>row.label==='LED Technology')?.value??''
  return /dual[ -]?chip/i.test(value)?'Dual Chip':/mono[ -]?chip/i.test(value)?'Mono Chip':undefined
}
export function matchesFilters(product:ProductManual,query:string,selectedSizes:string[],selectedChips:string[]){
  return [product.name,product.id,...(legacyNames[product.id]??[])].join(' ').toLowerCase().includes(query.trim().toLowerCase())&&(!selectedSizes.length||selectedSizes.includes(productSize(product.id)))&&(!selectedChips.length||selectedChips.includes(productChip(product)??''))
}
