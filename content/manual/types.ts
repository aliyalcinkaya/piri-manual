/**
 * Schema for a single product's user manual.
 *
 * One file per product lives in `content/manual/products/<id>.ts` and exports a
 * `ProductManual`. Editors change the text between the quotes; the structure
 * (brackets, commas) must stay intact. Run `npm run validate:content` after edits.
 *
 * Only per-product content lives here. Text that is identical for every product
 * (FAQ, maintenance/safety, treatment guide, the red-light-therapy prose,
 * warranty terms) stays in the components under `components/manual/`.
 */

export type ImageRef = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export type PackageItem = {
  label: string
  image: string
  /** optional Tailwind background class for the image well (keeps the current pastel look) */
  accent?: string
}

export type HowToStep = {
  title: string
  /** short line under the title (was an <h5> or a lead paragraph) */
  subtitle?: string
  /** bullet lines; inline `**bold**` is rendered as <strong> */
  bullets: string[]
  /** amber caveat line shown under the bullets */
  note?: string
  /** single illustrative image for the step */
  image?: ImageRef
  /** extra images when a step shows more than one screenshot */
  images?: ImageRef[]
}

export type HowToUse = {
  intro: string
  /** diagram shown above the steps (device layout / control panel) */
  diagram?: ImageRef
  steps: HowToStep[]
  /** optional "Remote Control" block appended after the numbered steps */
  remoteControl?: {
    title: string
    intro?: string
    steps: HowToStep[]
    image?: ImageRef
  }
}

export type SpecRow = {
  /** left column label; use "" for a continuation row (e.g. the 2nd wavelength line) */
  label: string
  value: string
}

export type Specifications = {
  rows: SpecRow[]
  /** e.g. ["CE", "FCC", "RoHS", "Portable"] */
  certifications: string[]
  /** extra image block under the spec table (Piri Core Pro only today) */
  extraImages?: ImageRef[]
}

export type FeatureCard = {
  title: string
  body?: string
  /** ordered sub-steps (used by the multi-device sync card) */
  steps?: string[]
  /** optional Tailwind gradient classes (keeps the current card look) */
  accent?: string
}

export type ProductManual = {
  /** URL slug and the only real key, e.g. "piri-portable" */
  id: string
  /** display name shown in headings, e.g. "Piri Portable" */
  name: string
  /** one-line description on the landing page card */
  tagline: string
  /** landing page card image, a /public path */
  cardImage: string
  /** short badges on the landing page card */
  features: string[]

  packageContents: PackageItem[]
  howToUse: HowToUse
  specifications: Specifications
  additionalFeatures?: FeatureCard[]

  /** 5 = full red + NIR spectrum, 2 = Portable (660nm + 850nm only) */
  wavelengthCount: 2 | 5
  /** show the "Custom Dual-Chip Technology" block in the red-light-therapy section (V2 only) */
  showDualChipScience: boolean
  /** show the V2-only "Advanced Features" section */
  showAdvancedFeatures: boolean
  /** limited-warranty length in years (Prime = 3, otherwise 2) */
  warrantyYears: number
}
