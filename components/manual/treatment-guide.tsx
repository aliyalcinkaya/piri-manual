import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  AlertTriangle,
  Shield,
  Target,
  Clock,
  Zap,
  Timer,
  Activity,
  Heart,
  Eye,
  Lightbulb,
  Users,
  AlertCircle,
} from "lucide-react"

export function TreatmentGuide() {
  return (
    <section id="treatment-guide" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            How to Perform a Treatment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Preparation and Safety Guidelines
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Consult a Healthcare Professional</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Before beginning any treatment, consult with a healthcare provider, especially if you have
                  pre-existing medical conditions or are taking medications.
                </p>
                <p className="text-sm font-medium mb-2">Important contraindications:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>
                    • If you have photosensitivity (due to conditions like lupus or certain medications, including some
                    antibiotics and acne treatments like Accutane), avoid RLT as it can increase skin sensitivity
                  </li>
                  <li>
                    • If you have active cancer or suspect cancer, RLT usage must be cleared by your physician, as
                    improved blood flow may cause cancer spread
                  </li>
                  <li>
                    • If you have an overactive thyroid (hyperthyroidism), avoid shining the device directly on your
                    neck
                  </li>
                  <li>
                    • If you have a history of seizure disorders, consult a neurologist before starting RLT,
                    particularly if using pulsing functions
                  </li>
                  <li>• If you are pregnant, do not treat the belly directly</li>
                  <li>
                    • Inform your healthcare provider about any medical devices you have, such as pacemakers, as they
                    may be affected by electromagnetic fields
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Eye Safety
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Never stare directly into the LED diodes or their reflection in mirrors - this can cause temporary
                irritation or damage to the eyes
              </li>
              <li>
                • Use protective goggles or eyewear supplied with the device, especially when treating the face or when
                positioned near high-powered panels
              </li>
              <li>• If treating facial areas, keep eyes closed and use appropriate eye protection</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Pre-Treatment Preparation
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Ensure your skin is clean and free from lotions, creams, or oils before starting a session, as these
                substances may interfere with therapy effectiveness
              </li>
              <li>
                • Remove clothing from the treatment area for optimal light penetration, as clothing thickness and color
                can affect results
              </li>
              <li>• Do not apply the device to wet or damp skin - ensure treatment area is completely dry</li>
              <li>
                • Do not treat open wounds, active infections, or fresh burns - wait until the skin has fully healed
              </li>
              <li>• Do not use on open wounds as increased circulation may cause bleeding</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Electrical Safety
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              This device is an electrical device - follow these precautions to avoid electric shock:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Do not drop the device in water or liquids - risk of electric shock</li>
              <li>• Do not wash electrical parts with water or liquids</li>
              <li>• Do not touch the device, plugs, or switches with wet hands</li>
              <li>• Do not pull, carry, or lift the device by its cord</li>
              <li>• If the power cord is damaged, do not use the device - risk of electric shock</li>
              <li>• Do not use the device if it has been dropped, left outside, or encountered water or liquids</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Usage Environment Safety
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Do not use on or near heated surfaces</li>
              <li>
                • Do not operate in areas with flammable or combustible products or where vapors may be present -
                explosion or fire may occur
              </li>
              <li>• Ensure adequate ventilation during use</li>
              <li>• Store device in a dry, safe location when not in use</li>
            </ul>
          </div>

          <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Special Populations and Conditions
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Do not let children use the devices unsupervised - adult supervision is required at all times</li>
              <li>• This device is not to be used by sleeping or unconscious persons</li>
              <li>• Do not use during pregnancy on abdominal area</li>
              <li>• Exercise extra caution with elderly users or those with compromised skin integrity</li>
            </ul>
          </div>

          <div className="bg-pink-50 dark:bg-pink-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Product Interaction Warnings
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                • Do not use this device in combination with liniments and balms that contain heat-producing ingredients
                - skin burns could result
              </li>
              <li>• Avoid using with other topical products that may increase photosensitivity</li>
              <li>• Consult healthcare provider about interactions with medications that cause photosensitivity</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-950/20 p-4 rounded-lg">
            <h4 className="font-medium mb-3">Proper Usage Guidelines</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                • Use of this device in any way other than described in this manual voids the warranty and could result
                in serious injury
              </li>
              <li>• Follow all recommended distances, durations, and frequencies</li>
              <li>• Stop use immediately if you experience any adverse reactions</li>
              <li>• Do not exceed recommended treatment times or frequencies</li>
            </ul>
          </div>

          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-medium mb-3 text-red-800 dark:text-red-200">Emergency Procedures</h4>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li>• If skin irritation occurs, discontinue use immediately and consult a healthcare provider</li>
              <li>
                • In case of eye irritation from light exposure, flush with clean water and seek medical attention if
                symptoms persist
              </li>
              <li>• If electric shock occurs, disconnect power immediately and seek medical attention</li>
              <li>• Keep emergency contact information readily available</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Treatment Protocols
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Distance Guidelines
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Distance from the device is critical as it determines the therapeutic light dose reaching your body.
                  Farther distances provide larger coverage area but lower dose intensity, requiring longer sessions.
                  Closer distances deliver higher dose in concentrated areas, shortening treatment time.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                          Recommended Distance
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Coverage Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Ultra-Close Range</td>
                        <td className="border border-gray-300 px-4 py-3">3-6 inches (8-15cm)</td>
                        <td className="border border-gray-300 px-4 py-3">Concentrated therapy on specific areas</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Close Range</td>
                        <td className="border border-gray-300 px-4 py-3">6-12 inches (15-30 cm)</td>
                        <td className="border border-gray-300 px-4 py-3">Facial care and localized treatments</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Medium Range</td>
                        <td className="border border-gray-300 px-4 py-3">12-18 inches (30-45 cm)</td>
                        <td className="border border-gray-300 px-4 py-3">Broader coverage and muscle recovery</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">Extended Range</td>
                        <td className="border border-gray-300 px-4 py-3">18-24+ inches (45-60 cm)</td>
                        <td className="border border-gray-300 px-4 py-3">General wellness and full-body sessions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Distance-Based Treatment Approaches</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Ultra-Close Range (3-6 inches)</h5>
                    <p className="text-sm font-medium mb-2">Best for: Concentrated therapy on specific areas</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spot treatments (acne, scars, wrinkles)</li>
                      <li>• Targeted pain relief (sore shoulder, knee pain)</li>
                      <li>• Small wound healing</li>
                    </ul>
                    <p className="text-sm font-medium mt-2 mb-1">Benefits:</p>
                    <p className="text-sm text-muted-foreground">Maximum light intensity, faster treatment times</p>
                    <p className="text-sm font-medium mt-2 mb-1">Session time: 3-5 minutes per area</p>
                    <p className="text-sm font-medium">Coverage: Very small, focused area</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Close Range (6-12 inches)</h5>
                    <p className="text-sm font-medium mb-2">Best for: Facial care and localized treatments</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Facial anti-aging treatments</li>
                      <li>• Neck and décolletage care</li>
                      <li>• Joint-specific therapy</li>
                    </ul>
                    <p className="text-sm font-medium mt-2 mb-1">Benefits:</p>
                    <p className="text-sm text-muted-foreground">Good intensity with moderate coverage</p>
                    <p className="text-sm font-medium mt-2 mb-1">Session time: 5-10 minutes per area</p>
                    <p className="text-sm font-medium">Coverage: Face-sized area</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Medium Range (12-18 inches)</h5>
                    <p className="text-sm font-medium mb-2">Best for: Broader coverage and muscle recovery</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Large muscle groups (back, legs, chest)</li>
                      <li>• Post-workout recovery</li>
                      <li>• Multiple body areas in one session</li>
                    </ul>
                    <p className="text-sm font-medium mt-2 mb-1">Benefits:</p>
                    <p className="text-sm text-muted-foreground">Balanced intensity and coverage</p>
                    <p className="text-sm font-medium mt-2 mb-1">Session time: 10-15 minutes per side</p>
                    <p className="text-sm font-medium">Coverage: Torso or large limb area</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Extended Range (18-24+ inches)</h5>
                    <p className="text-sm font-medium mb-2">Best for: General wellness and full-body sessions</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Overall health maintenance</li>
                      <li>• Systemic benefits (circulation, energy)</li>
                      <li>• Comfortable daily sessions</li>
                    </ul>
                    <p className="text-sm font-medium mt-2 mb-1">Benefits:</p>
                    <p className="text-sm text-muted-foreground">Largest coverage area, gentle intensity</p>
                    <p className="text-sm font-medium mt-2 mb-1">Session time: 15-20 minutes per side</p>
                    <p className="text-sm font-medium">Coverage: Full torso or multiple body regions</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Key Principles</h4>
                <p className="text-sm font-medium mb-2">
                  Inverse Square Law: Light intensity decreases with distance squared
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  2x distance = 1/4 intensity = 4x longer treatment time needed
                </p>

                <p className="text-sm font-medium mb-2">Treatment Trade-offs:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Closer = Higher intensity + Shorter time + Smaller coverage</li>
                  <li>• Farther = Lower intensity + Longer time + Larger coverage</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Session Guidelines
            </h3>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Timer className="h-4 w-4" />
                  Duration
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Start safely:</strong> Begin with a 1-2 minute test session at 12 inches (30 cm) to ensure
                  your body doesn't react negatively (rashes, headaches, etc.)
                </p>
                <p className="text-sm font-medium mb-2">Progressive approach:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• If initial test is fine, progress to 5-10 minute sessions</li>
                  <li>
                    • Example routine: Stand 12 inches from device, treat front of body for 5 minutes, turn and treat
                    back for 5-10 minutes
                  </li>
                  <li>
                    • Avoid overdosing: Do not exceed recommended session times or perform multiple daily sessions
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Frequency
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Consistency is essential for experiencing full RLT benefits</li>
                  <li>• Start with shorter sessions and gradually increase duration and frequency as tolerated</li>
                  <li>• Recommended frequency: 4-5 times per week</li>
                  <li>• Establish a routine for 2-3 weeks before making changes</li>
                  <li>• Monitor your body's response and adjust accordingly</li>
                </ul>
              </div>

              <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  During Treatment
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Remain still and comfortable during the session</li>
                  <li>• Keep eyes protected if treating facial area</li>
                  <li>• Stop immediately if you experience any discomfort, burning, or adverse reactions</li>
                  <li>• Do not look directly into the light source</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Post-Treatment
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No special post-treatment care is typically required</li>
                  <li>• Stay hydrated</li>
                  <li>• Monitor your skin and overall response</li>
                  <li>• Track your progress and adjust protocols as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
