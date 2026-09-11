import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Can I wear clothes?</h4>
              <p className="text-sm text-muted-foreground">Red light therapy should be used on bare skin.</p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Do I need to use protective glasses?</h4>
              <p className="text-sm text-muted-foreground">
                It's not always required, but recommended if you are sensitive to light or want extra protection for
                your eyes.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">How quickly can I expect results?</h4>
              <p className="text-sm text-muted-foreground">
                Effects vary between individuals. Some notice improvements within a few weeks, while others may need
                several months of regular use.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Can the device replace medical treatment?</h4>
              <p className="text-sm text-muted-foreground">
                No, light therapy is a complementary measure. For serious health problems, you should always consult
                medical professionals.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Can I get sunburned from red light therapy?</h4>
              <p className="text-sm text-muted-foreground">
                No, red light therapy contains no UV radiation and does not burn the skin. A few individuals have
                photosensitive skin and may experience mild irritation.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Why do some of the LEDs look like they are not working?</h4>
              <p className="text-sm text-muted-foreground">
                Near-infrared (NIR) LEDs (810nm, 830nm, 850nm) may appear dim or off since their light is nearly
                invisible. Despite their low visible brightness compared to red wavelengths, they function effectively.
                Verify their operation via a smartphone camera or by feeling the warmth they emit.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">How many times per day can I use the device?</h4>
              <p className="text-sm text-muted-foreground">
                Beginners: 5-10 minute sessions, once daily, every other day for two weeks. Experienced users: 15-20
                minutes, 1-2 times daily (4-hour minimum between sessions). Acute injuries: 2-3 shorter sessions daily.
                Reduce frequency if skin irritation (over 2 hours), headaches, fatigue, excessive dryness, or unusual
                reactions occur.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Can children use the device?</h4>
              <p className="text-sm text-muted-foreground">
                Adult supervision is required for children using the device, and it should not be used on babies. For
                children over 12, adult treatment times apply with close skin monitoring. For those under 12, use half
                the adult intensity and duration. Eye protection is mandatory for all pediatric use.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">How long should each treatment session last?</h4>
              <p className="text-sm text-muted-foreground">
                For effective light therapy, start with 5-10 minute sessions for 1-2 weeks, gradually increasing to
                10-20 minutes as tolerated. The maximum is 30 minutes; frequent shorter sessions are better. Monitor
                skin response and adjust accordingly.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">What should I do if my skin gets red and stays red?</h4>
              <p className="text-sm text-muted-foreground">
                Mild skin redness for 1-2 hours post-treatment is normal. Discontinue use if redness exceeds 4 hours, or
                if burning or unusual reactions occur. Apply a cool cloth and contact a healthcare provider for severe
                or persistent reactions. Begin with shorter sessions and lower intensity to reduce risk.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Can I use skincare products before or after treatment?</h4>
              <p className="text-sm text-muted-foreground">
                For optimal results, apply the device to clean, dry skin, free of all skincare products. Post-treatment,
                wait 30 minutes before applying skincare. Avoid retinoids or photosensitizing products 24 hours before
                and after treatment.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">What's the optimal distance for treatment?</h4>
              <p className="text-sm text-muted-foreground">
                Optimal distance for treatments varies: 8-12 inches for facial, 6-8 inches for targeted pain/muscle
                relief, and 10-14 inches for larger areas. Begin further away and gradually reduce distance as tolerance
                increases.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Should I use it before or after exercise?</h4>
              <p className="text-sm text-muted-foreground">
                Pre-exercise use (5-10 mins/muscle group, 50-75% intensity, 15-30 mins before) warms muscles, increases
                blood flow, enhances flexibility, and reduces injury risk. Post-exercise use (15-20 mins/area, 75-100%
                intensity, within 2 hours after) speeds recovery, lessens soreness and inflammation, aids muscle repair,
                and improves training adaptation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
