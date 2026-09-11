import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Eye, Zap, Brain, Users, Clock, Cpu } from 'lucide-react'

interface RedLightTherapyProps {
  /** 5 = full red + NIR spectrum, 2 = Portable (660nm + 850nm only) */
  wavelengthCount: 2 | 5
  /** show the "Custom Dual-Chip Technology" block (Piri Core Pro only) */
  showDualChipScience: boolean
}

export function RedLightTherapy({ wavelengthCount, showDualChipScience }: RedLightTherapyProps) {
  const hasFiveWavelengths = wavelengthCount === 5

  return (
    <section id="what-is-red-light" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            What is Red Light Therapy?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Red light therapy is a form of light treatment where specific wavelengths of red and near-infrared light
              are directed at the skin to stimulate cells for increased energy production.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">What is Photobiomodulation?</h4>
              <p className="text-blue-800 text-sm mb-3">
                Photobiomodulation (PBM) is the process by which specific wavelengths of light interact with cellular
                components to stimulate beneficial biological responses. When absorbed by cells, therapeutic light
                wavelengths enhance mitochondrial function, leading to increased cellular energy production and improved
                healing processes.
              </p>
              <div className="text-blue-800 text-sm">
                <strong>The Science Made Simple:</strong> Light absorption occurs when cells absorb therapeutic
                wavelengths, which then triggers mitochondrial activation as cellular powerhouses increase energy
                production, ultimately resulting in enhanced healing where improved cellular function promotes natural
                recovery.
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-semibold">What is Cytochrome c Oxidase?</h3>
            </div>
            <p className="text-sm text-muted-foreground font-medium">The Primary Target of Red Light Therapy</p>

            <p className="text-muted-foreground text-sm">
              Cytochrome c oxidase (CcO) is the terminal enzyme in cellular respiration that catalyzes the reduction of
              molecular oxygen to water, using electrons donated by cytochrome c. This process couples electron transfer
              to the pumping of protons across a membrane, which creates an electrochemical gradient used for ATP
              synthesis during oxidative phosphorylation.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <h5 className="font-medium text-orange-900 mb-3">Key Functions in Photobiomodulation:</h5>
                  <ul className="space-y-2 text-sm text-orange-800">
                    <li>
                      <strong>Catalyzes Oxygen Reduction</strong> - Performs the final step of electron transport chain
                    </li>
                    <li>
                      <strong>Electron Transfer</strong> - Enhanced when absorbing specific light wavelengths
                    </li>
                    <li>
                      <strong>Proton Pumping</strong> - Builds electrochemical gradient for ATP production
                    </li>
                    <li>
                      <strong>Energy Generation</strong> - Drives cellular energy production
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <h5 className="font-medium text-green-900 mb-3">Location and Significance:</h5>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>
                      <strong>Mitochondrial Enzyme</strong> - Located on inner mitochondrial membrane
                    </li>
                    <li>
                      <strong>Terminal Enzyme</strong> - Critical control point for energy production
                    </li>
                    <li>
                      <strong>Absorption Characteristics</strong> - Multiple peaks at 620nm, 680nm, 760nm, 825nm
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {showDualChipScience && (
            <>
              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">Custom Dual-Chip Technology</h3>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Maximizing Cytochrome c Oxidase Absorption</p>

                <p className="text-muted-foreground text-sm">
                  The Piri Core Pro features custom dual-chip LEDs specifically engineered to target the
                  two primary absorption peaks of cytochrome c oxidase. This advanced technology ensures maximum
                  therapeutic effectiveness by delivering precisely the wavelengths that cellular chromophores absorb
                  most efficiently.
                </p>

                <div className="grid gap-4">
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Dual-Peak Targeting</h4>
                      <p className="text-sm text-purple-800">
                        Each LED chip is calibrated to emit light at the exact wavelengths where cytochrome c oxidase
                        shows peak absorption, maximizing the photobiomodulation response at the cellular level.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-indigo-50 border-indigo-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-indigo-900 mb-2">Enhanced Photon Density</h4>
                      <p className="text-sm text-indigo-800">
                        The dual-chip design delivers higher photon density compared to single-chip LEDs, ensuring
                        sufficient energy reaches the mitochondrial targets even in deeper tissues.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-violet-50 border-violet-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-violet-900 mb-2">Optimized Spectral Output</h4>
                      <p className="text-sm text-violet-800">
                        Custom wavelength tuning ensures that each photon contributes maximally to the therapeutic
                        effect, reducing wasted energy and improving treatment efficiency.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}

          <Separator />

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              Key Wavelength Benefits
            </h3>

            <div className="grid gap-4">
              {hasFiveWavelengths && (
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-900 mb-2">630nm - Surface Rejuvenation</h4>
                    <p className="text-sm text-red-800 mb-2">
                      <strong>Benefits:</strong> Skin rejuvenation, collagen production, fine line reduction,
                      surface-level healing
                    </p>
                    <p className="text-sm text-red-700">
                      <strong>Applications:</strong> Anti-aging, cosmetic treatments, superficial wound healing
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">660nm - The Gold Standard</h4>
                  <p className="text-sm text-yellow-800 mb-2">
                    <strong>Benefits:</strong> Muscle recovery, tissue repair, inflammation reduction, enhanced cellular
                    energy
                  </p>
                  <p className="text-sm text-yellow-700">
                    <strong>Applications:</strong> Muscle recovery, joint pain management, general wellness
                  </p>
                </CardContent>
              </Card>

              {hasFiveWavelengths && (
                <>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">810nm - Deep Tissue Penetration</h4>
                      <p className="text-sm text-purple-800 mb-2">
                        <strong>Benefits:</strong> Deep tissue healing, bone health support, neurological benefits,
                        enhanced circulation
                      </p>
                      <p className="text-sm text-purple-700">
                        <strong>Applications:</strong> Deep muscle treatment, bone healing, cognitive support
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-teal-50 border-teal-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-teal-900 mb-2">830nm - Cellular Optimization</h4>
                      <p className="text-sm text-teal-800 mb-2">
                        <strong>Benefits:</strong> Mitochondrial function enhancement, cellular metabolism boost,
                        oxidative stress reduction
                      </p>
                      <p className="text-sm text-teal-700">
                        <strong>Applications:</strong> Systemic wellness, metabolic support, cellular health
                        optimization
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              <Card className="bg-indigo-50 border-indigo-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-indigo-900 mb-2">850nm - The Amplifier</h4>
                  <p className="text-sm text-indigo-800 mb-2">
                    <strong>Benefits:</strong> Maximum penetration, systemic effects, oxidative stress reduction, immune
                    support
                  </p>
                  <p className="text-sm text-indigo-700">
                    <strong>Applications:</strong> Systemic treatment, immune support, deep tissue concerns
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Wavelength</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Primary Applications</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Penetration Depth</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Key Research Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {hasFiveWavelengths && (
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 p-3 font-medium">630nm</td>
                      <td className="border border-gray-300 p-3">Skin rejuvenation, collagen synthesis</td>
                      <td className="border border-gray-300 p-3">Shallow (surface skin)</td>
                      <td className="border border-gray-300 p-3">Proven effective for cosmetic applications</td>
                    </tr>
                  )}
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 p-3 font-medium">660nm</td>
                    <td className="border border-gray-300 p-3">Wound healing, muscle recovery, inflammation</td>
                    <td className="border border-gray-300 p-3">Moderate (superficial muscle)</td>
                    <td className="border border-gray-300 p-3">Widely studied for pain relief applications</td>
                  </tr>
                  {hasFiveWavelengths && (
                    <>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 p-3 font-medium">810nm</td>
                        <td className="border border-gray-300 p-3">
                          Deep tissue healing, bone health, cognitive function
                        </td>
                        <td className="border border-gray-300 p-3">Deep (bone and deep tissue)</td>
                        <td className="border border-gray-300 p-3">Research supports neurological and bone benefits</td>
                      </tr>
                      <tr className="bg-teal-50">
                        <td className="border border-gray-300 p-3 font-medium">830nm</td>
                        <td className="border border-gray-300 p-3">Cellular metabolism, mitochondrial function</td>
                        <td className="border border-gray-300 p-3">Deep (systemic cellular effects)</td>
                        <td className="border border-gray-300 p-3">Studies show enhanced cellular energy production</td>
                      </tr>
                    </>
                  )}
                  <tr className="bg-indigo-50">
                    <td className="border border-gray-300 p-3 font-medium">850nm</td>
                    <td className="border border-gray-300 p-3">Anti-inflammatory, systemic effects</td>
                    <td className="border border-gray-300 p-3">Deepest (systemic reach)</td>
                    <td className="border border-gray-300 p-3">Research indicates broad therapeutic benefits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Who Benefits Most from Red Light Therapy
            </h3>

            <div className="grid gap-4">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Seniors and the Elderly</h4>
                  <p className="text-sm text-amber-800">
                    Non-invasive, drug-free approach for managing age-related concerns including chronic joint pain,
                    arthritis, wound healing, and potentially enhanced cognitive function and mood.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-pink-50 border-pink-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-pink-900 mb-2">Individuals Seeking Anti-Aging & Skin Health</h4>
                  <p className="text-sm text-pink-800">
                    Stimulates collagen and elastin production, potentially reducing wrinkles and fine lines, improving
                    skin tone and texture, and healing sun damage and age spots.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-emerald-900 mb-2">Athletes and Fitness Enthusiasts</h4>
                  <p className="text-sm text-emerald-800">
                    Helps reduce muscle stiffness and inflammation, aids in faster recovery after workouts, potentially
                    enhances performance, and supports muscle development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-900 mb-2">People with Pain Conditions</h4>
                  <p className="text-sm text-red-800">
                    Shows promise for treating chronic pain from arthritis, fibromyalgia, joint pain, and nerve pain by
                    supporting the body's natural healing processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Expected Results Timeline
            </h3>

            <div className="grid gap-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-green-700">Immediate Effects (During/After Treatment)</h4>
                  <p className="text-sm text-muted-foreground">
                    Increased warmth and circulation, mild sense of well-being, enhanced relaxation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-blue-700">Short-term Results (1-2 weeks)</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced pain and inflammation, improved sleep patterns, increased energy levels
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-purple-700">Medium-term Improvements (1-2 months)</h4>
                  <p className="text-sm text-muted-foreground">
                    Noticeable skin improvements, enhanced muscle recovery, better overall wellness
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-orange-700">Long-term Benefits (3+ months)</h4>
                  <p className="text-sm text-muted-foreground">
                    Significant pain reduction, visible anti-aging effects, optimized cellular function
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Realistic Expectations</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">What to Expect:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Gradual, cumulative improvements over time</li>
                      <li>• Individual results may vary significantly</li>
                      <li>• Consistent use yields best results</li>
                      <li>• Works best as complement to healthy lifestyle</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Unrealistic Expectations to Avoid:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Immediate miraculous changes</li>
                      <li>• Cure for serious medical conditions</li>
                      <li>• Replacement for necessary medical treatment</li>
                      <li>• Significant results without consistent use</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
