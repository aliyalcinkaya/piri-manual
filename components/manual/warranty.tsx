import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Wrench } from "lucide-react"

interface WarrantyProps {
  /** limited-warranty length in years (Prime = 3, otherwise 2) */
  warrantyYears: number
}

export function Warranty({ warrantyYears }: WarrantyProps) {

  return (
    <section id="warranty" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Warranty
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-green-600">30-Day Money Back Guarantee</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Your complete satisfaction is our priority at Piri Red. All our products are backed by a 30-day
              satisfaction guarantee.
            </p>
            <p className="text-sm text-muted-foreground">
              If you are not entirely satisfied with your purchase, you may return it within 30 days for a full refund.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium mb-3 text-blue-600">{warrantyYears}-Year Limited Warranty</h4>
            <p className="text-sm text-muted-foreground mb-3">
              We provide a {warrantyYears}-year limited warranty covering material and manufacturing defects under
              normal use.
            </p>
            <p className="text-sm text-muted-foreground">
              This warranty does not extend to damage resulting from misuse, normal wear and tear, or modifications.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">@</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">support@pirired.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📞</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+61 2 8000 0608</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Website</p>
                  <p className="text-sm text-muted-foreground">www.pirired.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">#</span>
                </div>
                <div>
                  <p className="text-sm font-medium">ACN</p>
                  <p className="text-sm text-muted-foreground">634 332 166</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-medium">ABN</p>
                  <p className="text-sm text-muted-foreground">77 634 332 166</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
