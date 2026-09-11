import { notFound } from "next/navigation"
import { getManual, productIds } from "@/content/manual/index"
import { ManualPage } from "@/components/manual/manual-page"

export function generateStaticParams() {
  return productIds.map((product) => ({ product }))
}

export default function Page({ params }: { params: { product: string } }) {
  const manual = getManual(params.product)
  if (!manual) notFound()
  return <ManualPage manual={manual} />
}
