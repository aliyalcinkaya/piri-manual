import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"
import Image from "next/image"
import type { PackageItem } from "@/content/manual/types"

interface PackageContentsProps {
  items: PackageItem[]
}

function gridColsFor(count: number): string {
  if (count <= 2) return "grid-cols-2"
  if (count === 3) return "grid-cols-3"
  if (count <= 4) return "grid-cols-2 md:grid-cols-4"
  return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
}

export function PackageContents({ items }: PackageContentsProps) {
  return (
    <section id="package-contents" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Package Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`grid ${gridColsFor(items.length)} gap-4`}>
            {items.map((item) => (
              <div key={item.label} className="text-center p-4 border rounded-lg">
                <div
                  className={`w-24 h-24 ${item.accent ?? "bg-gray-50"} rounded-lg mx-auto mb-2 flex items-center justify-center overflow-hidden`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.label}
                    width={80}
                    height={80}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
