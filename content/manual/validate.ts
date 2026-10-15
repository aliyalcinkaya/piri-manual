/**
 * Lightweight content check. Run with `npm run validate:content` after editing
 * any file under `content/manual/`. It does not need a running server.
 *
 * During the refactor only some products are registered; once all seven exist
 * this also flags a missing id.
 */
import { manuals, productIds } from "@/content/manual/index"
import type { ProductManual } from "@/content/manual/types"

const EXPECTED_IDS = [
  "piri-portable",
  "piri-origin",
  "piri-origin-pro",
  "piri-core-pro",
  "piri-max-v0",
  "piri-max-pro-v0",
  "piri-prime",
  "piri-desktop-500",
  "piri-max-1500",
  "piri-vista-2250",
]

const errors: string[] = []
const check = (cond: boolean, msg: string): void => {
  if (!cond) errors.push(msg)
}

function validate(m: ProductManual): void {
  const p = `[${m.id}]`
  check(m.id === m.id.toLowerCase() && !m.id.includes(" "), `${p} id must be a slug`)
  check(m.name.length > 0, `${p} name is empty`)
  check(m.tagline.length > 0, `${p} tagline is empty`)
  check(m.cardImage.startsWith("/") || m.cardImage.startsWith("https://cdn.shopify.com/"), `${p} cardImage must be a local path or Shopify CDN image`)
  check(m.features.length >= 1, `${p} needs at least one feature`)
  check(m.packageContents.length >= 1, `${p} packageContents is empty`)
  check(m.howToUse.intro.length > 0, `${p} howToUse.intro is empty`)
  check(m.howToUse.steps.length >= 1, `${p} howToUse has no steps`)
  m.howToUse.steps.forEach((s, i) =>
    check(s.bullets.length >= 1, `${p} howToUse step ${i + 1} "${s.title}" has no bullets`),
  )
  check(m.specifications.rows.length >= 5, `${p} specifications has too few rows`)
  check(m.specifications.certifications.length >= 1, `${p} has no certifications`)
  check(m.wavelengthCount === 2 || m.wavelengthCount === 5, `${p} bad wavelengthCount`)
  check(m.warrantyYears >= 1, `${p} bad warrantyYears`)
}

Object.values(manuals).forEach(validate)

const missing = EXPECTED_IDS.filter((id) => !productIds.includes(id))
if (productIds.length === EXPECTED_IDS.length && missing.length > 0) {
  errors.push(`missing product ids: ${missing.join(", ")}`)
}
check(new Set(productIds).size === productIds.length, "duplicate product ids")

if (errors.length > 0) {
  console.error(`content/manual validation FAILED (${errors.length}):`)
  for (const e of errors) console.error("  - " + e)
  process.exit(1)
}
console.log(`content/manual OK - ${productIds.length} product(s): ${productIds.join(", ")}`)
