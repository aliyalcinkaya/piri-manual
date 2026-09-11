import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Settings } from "lucide-react"
import Image from "next/image"
import type { Specifications as SpecificationsData, SpecRow } from "@/content/manual/types"

interface SpecificationsProps {
  data: SpecificationsData
  productName: string
}

function SpecCell({ row }: { row: SpecRow }) {
  return (
    <div className="flex justify-between py-2 border-b">
      <span className="text-sm font-medium">{row.label}</span>
      <span className="text-sm text-muted-foreground">
        {row.label === "Category" ? (
          <Badge variant={row.value === "Commercial Use" ? "default" : "secondary"}>
            {row.value}
          </Badge>
        ) : (
          row.value
        )}
      </span>
    </div>
  )
}

export function Specifications({ data, productName }: SpecificationsProps) {
  const rows: SpecRow[] = [{ label: "Model", value: productName }, ...data.rows]
  const mid = Math.ceil(rows.length / 2)
  const left = rows.slice(0, mid)
  const right = rows.slice(mid)

  return (
    <section id="specifications" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Specifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              {left.map((row, i) => (
                <SpecCell key={i} row={row} />
              ))}
            </div>
            <div className="space-y-3">
              {right.map((row, i) => (
                <SpecCell key={i} row={row} />
              ))}
            </div>
          </div>

          {data.extraImages && data.extraImages.length > 0 && (
            <>
              <Separator className="my-6" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.extraImages.map((img, i) => (
                  <div key={i} className="space-y-2">
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      width={img.width ?? 600}
                      height={img.height ?? 600}
                      className="w-full h-auto rounded-lg border"
                    />
                    {img.caption && (
                      <p className="text-sm text-muted-foreground text-center">{img.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <Separator className="my-6" />

          <div className="flex flex-wrap gap-2">
            {data.certifications.map((cert) => (
              <Badge key={cert} variant="outline">
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
