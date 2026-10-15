import {sectionTitles} from '@/content/manual/section-titles'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function MaintenanceSafety() {
  return (
    <section id="maintenance" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <h2>{sectionTitles['maintenance']}</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3>Storage & maintenance</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Store the device in a dry and cool place</li>
              <li>Avoid moisture and extreme temperatures</li>
              <li>Wipe the surface with a clean cloth when needed</li>
              <li>Ensure ventilation openings and connections are free from dust and dirt</li>
              <li>Avoid opening or modifying the device yourself</li>
            </ul>
          </div>

          <div className="maintenance-recycling">
            <h3>Recycling</h3>
            <p className="text-sm text-muted-foreground mb-3">
              When the device has reached the end of its lifespan, it should not be disposed of with regular household
              waste.
            </p>
            <p className="text-sm text-muted-foreground">
              Deliver the device to an approved collection station for electronic waste, or follow local regulations for
              recycling.
            </p>
          </div>

        </CardContent>
      </Card>
    </section>
  )
}
