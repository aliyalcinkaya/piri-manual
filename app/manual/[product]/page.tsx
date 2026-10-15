import { notFound } from "next/navigation"
import { getManual, productIds } from "@/content/manual/index"
import { ManualPage } from "@/components/manual/manual-page"
import { legacyAliases } from '@/content/manual/links'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return [...productIds, ...Object.keys(legacyAliases)].map((product) => ({ product }))
}

export function generateMetadata({ params }: { params: { product: string } }): Metadata {
  const manual = getManual(params.product)
  return {
    title: manual ? `${manual.name} user manual | Piri Red` : 'Manual not found | Piri Red',
    description: manual ? `Setup, controls, specifications and support for ${manual.name}.` : undefined,
    alternates: manual ? { canonical: `https://docs.pirired.com/manual/${manual.id}/` } : undefined,
  }
}

export default function Page({ params }: { params: { product: string } }) {
  const manual = getManual(params.product)
  if (!manual) notFound()
  return <ManualPage manual={manual} />
}
