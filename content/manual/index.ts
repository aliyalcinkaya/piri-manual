import type { ProductManual } from "@/content/manual/types"
import { legacyAliases } from './links'
import {applyStoreProduct,storeProducts} from './storefront'
import { piriPortable } from "@/content/manual/products/piri-portable"
import { piriOrigin } from "@/content/manual/products/piri-origin"
import { piriOriginPro } from "@/content/manual/products/piri-origin-pro"
import { piriCorePro } from "@/content/manual/products/piri-core-pro"
import { piriMaxV0 } from "@/content/manual/products/piri-max-v0"
import { piriMaxProV0 } from "@/content/manual/products/piri-max-pro-v0"
import { piriPrime } from "@/content/manual/products/piri-prime"
import { piriDesktop500 } from "@/content/manual/products/piri-desktop-500"
import { piriMax1500 } from "@/content/manual/products/piri-max-1500"
import { piriVista2250 } from "@/content/manual/products/piri-vista-2250"

/** Every product manual, in landing-page display order. */
const all: ProductManual[] = [
  piriPortable,
  piriDesktop500,
  piriCorePro,
  piriMax1500,
  piriVista2250,
  piriPrime,
  piriOrigin,
  piriOriginPro,
  piriMaxV0,
  piriMaxProV0,
]

export const manuals: Record<string, ProductManual> = Object.fromEntries(
  all.map((m) => [m.id, storeProducts[m.id]?applyStoreProduct(m,storeProducts[m.id]):m]),
)

export const productIds: string[] = all.map((m) => m.id)

/** Trimmed shape used by the landing page product grid. */
export const productList = Object.values(manuals).map(({ id, name, tagline, cardImage, features }) => ({
  id,
  name,
  tagline,
  cardImage,
  features,
}))

export function getManual(id: string): ProductManual | undefined {
  return manuals[legacyAliases[id] ?? id]
}
