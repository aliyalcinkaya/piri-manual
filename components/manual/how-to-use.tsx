import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"
import Image from "next/image"
import type { HowToUse as HowToUseData, HowToStep, ImageRef } from "@/content/manual/types"
import { renderInlineBold } from "@/components/manual/inline-bold"

interface HowToUseProps {
  data: HowToUseData
}

function StepImage({ image }: { image: ImageRef }) {
  return (
    <div>
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        width={image.width ?? 400}
        height={image.height ?? 300}
        className="mx-auto"
      />
      {image.caption && (
        <p className="text-xs text-center text-muted-foreground mt-2">{image.caption}</p>
      )}
    </div>
  )
}

function StepRow({ step, index }: { step: HowToStep; index: number }) {
  const isFirst = index === 0
  const images = step.images ?? (step.image ? [step.image] : [])

  return (
    <div
      className={`flex gap-4 p-4 border rounded-lg ${isFirst ? "bg-blue-50" : ""}`}
    >
      <div
        className={`w-8 h-8 ${isFirst ? "bg-blue-600" : "bg-red-600"} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
      >
        {index + 1}
      </div>
      <div className="flex-1">
        <h4 className="font-medium mb-1">{step.title}</h4>
        {step.subtitle && (
          <h5 className="font-medium text-sm mb-2 text-muted-foreground">{step.subtitle}</h5>
        )}
        <ul className="text-sm text-muted-foreground space-y-1 ml-4 mb-3">
          {step.bullets.map((b, i) => (
            <li key={i}>• {renderInlineBold(b)}</li>
          ))}
        </ul>
        {step.note && <p className="text-xs text-amber-600 mt-2 mb-3">{step.note}</p>}
        {images.length > 0 && (
          <div className="bg-white p-3 rounded-lg border space-y-4">
            {images.map((img, i) => (
              <StepImage key={i} image={img} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function HowToUse({ data }: HowToUseProps) {
  return (
    <section id="how-to-use" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            How to Use the Device
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">{data.intro}</p>

            {data.diagram && (
              <div className="bg-gray-50 p-4 rounded-lg border">
                <Image
                  src={data.diagram.src || "/placeholder.svg"}
                  alt={data.diagram.alt}
                  width={data.diagram.width ?? 600}
                  height={data.diagram.height ?? 400}
                  className="mx-auto"
                />
                {data.diagram.caption && (
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    {data.diagram.caption}
                  </p>
                )}
              </div>
            )}

            <div className="grid gap-4">
              {data.steps.map((step, i) => (
                <StepRow key={i} step={step} index={i} />
              ))}

              {data.remoteControl && (
                <div className="flex gap-4 p-4 border rounded-lg bg-blue-50">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    R
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-3">{data.remoteControl.title}</h4>
                    <div className="flex flex-col lg:flex-row gap-4 items-start">
                      <div className="flex-1 space-y-2">
                        {data.remoteControl.intro && (
                          <p className="text-sm text-muted-foreground">
                            {data.remoteControl.intro}
                          </p>
                        )}
                        {data.remoteControl.steps.map((s, i) => (
                          <ul key={i} className="text-sm text-muted-foreground space-y-1 ml-4">
                            {s.bullets.map((b, j) => (
                              <li key={j}>• {renderInlineBold(b)}</li>
                            ))}
                          </ul>
                        ))}
                      </div>
                      {data.remoteControl.image && (
                        <div className="bg-white p-3 rounded-lg border">
                          <StepImage image={data.remoteControl.image} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
