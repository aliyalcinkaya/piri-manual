import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"

export function MaintenanceSafety() {
  return (
    <section id="maintenance" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Maintenance and Safety
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Storage and Maintenance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Store the device in a dry and cool place</li>
              <li>• Avoid moisture and extreme temperatures</li>
              <li>• Wipe the surface with a clean cloth when needed</li>
              <li>• Ensure ventilation openings and connections are free from dust and dirt</li>
              <li>• Avoid opening or modifying the device yourself</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium mb-3">Recycling</h4>
            <p className="text-sm text-muted-foreground mb-3">
              When the device has reached the end of its lifespan, it should not be disposed of with regular household
              waste.
            </p>
            <p className="text-sm text-muted-foreground">
              Deliver the device to an approved collection station for electronic waste, or follow local regulations for
              recycling.
            </p>
          </div>

          <Separator />

          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Disclaimer</h4>
            <p className="text-sm text-muted-foreground">
              This product is not intended to diagnose, treat, cure or prevent disease. The information in this guide
              does not replace professional medical advice. Contact a doctor if you are unsure about health or use.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
