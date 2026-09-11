import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Monitor, Layers, Zap, Shield, Cpu } from 'lucide-react'

interface AdvancedFeaturesProps {
  /** Core Pro-only section — pass true only for Piri Core Pro */
  show: boolean
}

export function AdvancedFeatures({ show }: AdvancedFeaturesProps) {
  if (!show) {
    return null
  }

  return (
    <section id="advanced-features" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Advanced Features of Piri Core Pro
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The Piri Core Pro features cutting-edge technology designed for professional-grade red
              light therapy with precise control and maximum therapeutic effectiveness.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Real-Time Display Screen</h4>
                  </div>
                  <p className="text-sm text-blue-800">
                    Monitor your treatment parameters in real-time with an intuitive display showing time, intensity,
                    and mode settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-900">Separate Red & NIR Group Control</h4>
                  </div>
                  <p className="text-sm text-purple-800">
                    Independently control red and near-infrared wavelength groups for customized treatment protocols
                    tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-orange-600" />
                    <h4 className="font-semibold text-orange-900">Advanced Pulse Control Patterns</h4>
                  </div>
                  <p className="text-sm text-orange-800">
                    Multiple pulsing frequencies optimize cellular response and enhance therapeutic outcomes through
                    varied stimulation patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-900">Preset Memory Functions</h4>
                  </div>
                  <p className="text-sm text-green-800">
                    Save your favorite treatment settings and recall them instantly for consistent, personalized therapy
                    sessions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">EMF-Free Technology (0.0 μT)</h4>
                </div>
                <p className="text-sm text-red-800">
                  Zero electromagnetic field emissions ensure safe, worry-free treatments without exposure to
                  potentially harmful EMF radiation.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Advanced Dual-Chip LED Technology</h3>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Precision-Engineered Wavelength Combinations for Maximum Therapeutic Impact
            </p>

            <p className="text-muted-foreground text-sm">
              The Piri Core Pro utilizes custom dual-chip LEDs that combine specific wavelengths to
              create synergistic therapeutic effects. Each combination is scientifically designed to target different
              tissue depths and cellular processes simultaneously.
            </p>

            <div className="grid gap-4">
              <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h4 className="font-bold text-orange-900 text-lg">830nm + 660nm (48 LEDs)</h4>
                  </div>
                  <div className="space-y-2 text-sm text-orange-900">
                    <p>
                      <strong>Primary Benefits:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Mitochondrial optimization + muscle recovery</li>
                      <li>Enhanced bone health and collagen production</li>
                      <li>Superior endorphin release and tissue repair</li>
                      <li>Athletic performance and anti-aging benefits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-red-50 border-purple-200">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h4 className="font-bold text-purple-900 text-lg">810nm + 630nm (6 LEDs)</h4>
                  </div>
                  <div className="space-y-2 text-sm text-purple-900">
                    <p>
                      <strong>Primary Benefits:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Optimal brain health and cognitive enhancement</li>
                      <li>Superior skin rejuvenation and wound healing</li>
                      <li>Deep tissue repair with surface revitalization</li>
                      <li>Perfect for focused treatment areas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-pink-50 border-indigo-200">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <h4 className="font-bold text-indigo-900 text-lg">850nm + 630nm (6 LEDs)</h4>
                  </div>
                  <div className="space-y-2 text-sm text-indigo-900">
                    <p>
                      <strong>Primary Benefits:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Maximum tissue penetration + healing light</li>
                      <li>Deep anti-inflammatory and systemic effects</li>
                      <li>Enhanced wound healing and skin rejuvenation</li>
                      <li>Deep muscle recovery and pain relief</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Why Dual-Chip Technology Matters</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Synergistic Effects:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Combined wavelengths work together for enhanced results</li>
                      <li>• Targets multiple tissue depths simultaneously</li>
                      <li>• Addresses both surface and deep cellular processes</li>
                      <li>• Maximizes therapeutic efficiency per treatment</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Clinical Advantages:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Higher photon density for deeper penetration</li>
                      <li>• Optimized for cytochrome c oxidase absorption</li>
                      <li>• Reduced treatment time with better outcomes</li>
                      <li>• Professional-grade therapeutic precision</li>
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
