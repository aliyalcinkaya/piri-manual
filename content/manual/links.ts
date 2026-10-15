export const storeUrl = 'https://pirired.com.au'
export const supportUrl = `${storeUrl}/pages/contact`
export const returnsUrl = `${storeUrl}/policies/refund-policy`
export const productHandles: Record<string, string> = {
  'piri-portable': 'piri-portable',
  'piri-origin': 'piri-origin-red-light-therapy-panel-for-home-use-black',
  'piri-origin-pro': 'piri-origin-pro-red-light-therapy-panel-with-pulsing-black',
  'piri-core-pro': 'piri-core-pro',
  'piri-max-v0': 'piri-max',
  'piri-prime': 'piri-prime',
  'piri-desktop-500': 'piri-desktop-500',
  'piri-max-1500': 'piri-max-1500',
  'piri-vista-2250': 'piri-vista-2250',
}
export const legacyAliases: Record<string, string> = {
  'piri-desktop': 'piri-origin',
  'piri-desktop-pro': 'piri-origin-pro',
  'piri-desktop-pro-new-gen': 'piri-core-pro',
  'piri-max': 'piri-max-v0',
  'piri-max-pro': 'piri-max-pro-v0',
}
export const legacyNames: Record<string, string[]> = {
  'piri-desktop-500': ['Piri Desktop 500'],
  'piri-max-1500': ['Piri Max 1500'],
  'piri-vista-2250': ['Piri Vista 2250'],
  'piri-origin': ['Piri Desktop'],
  'piri-origin-pro': ['Piri Desktop Pro'],
  'piri-core-pro': ['Piri Desktop Pro V2', 'Piri Desktop Pro New Gen'],
  'piri-max-v0': ['Piri Max 300'],
  'piri-max-pro-v0': ['Piri Max Pro'],
}
export function productUrl(id: string): string | undefined {
  return productHandles[id] ? `${storeUrl}/products/${productHandles[id]}` : undefined
}
