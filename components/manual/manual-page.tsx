"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { Navigation, type NavSection } from "@/components/manual/navigation"
import { PackageContents } from "@/components/manual/package-contents"
import { HowToUse } from "@/components/manual/how-to-use"
import { TreatmentGuide } from "@/components/manual/treatment-guide"
import { RedLightTherapy } from "@/components/manual/red-light-therapy"
import { MaintenanceSafety } from "@/components/manual/maintenance-safety"
import { FAQ } from "@/components/manual/faq"
import { Specifications } from "@/components/manual/specifications"
import { Warranty } from "@/components/manual/warranty"
import { AdvancedFeatures } from "@/components/manual/advanced-features"
import { AdditionalFeatures } from "@/components/manual/additional-features"
import type { ProductManual } from "@/content/manual/types"

function buildSections(manual: ProductManual): NavSection[] {
  const sections: NavSection[] = [
    { id: "package-contents", title: "Package Contents" },
    { id: "how-to-use", title: "How to Use the Device" },
    { id: "treatment-guide", title: "Treatment Guide" },
    { id: "what-is-red-light", title: "What is Red Light Therapy?" },
  ]
  if (manual.showAdvancedFeatures) {
    sections.push({ id: "advanced-features", title: "Advanced Features" })
  }
  if (manual.additionalFeatures && manual.additionalFeatures.length > 0) {
    sections.push({ id: "additional-features", title: "Additional Features & Tips" })
  }
  sections.push(
    { id: "maintenance", title: "Maintenance and Safety" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "specifications", title: "Specifications" },
    { id: "warranty", title: "Warranty" },
  )
  return sections
}

export function ManualPage({ manual }: { manual: ProductManual }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const goHome = () => router.push("/")

  return (
    <div className="min-h-screen bg-background">
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-16 items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className="flex items-center gap-3 ml-2 lg:ml-0">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-balance">{manual.name}</h1>
              <p className="text-sm text-muted-foreground">User Manual</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <Navigation
          sections={buildSections(manual)}
          isMobileMenuOpen={isMobileMenuOpen}
          onSectionClick={scrollToSection}
          onHomeClick={goHome}
          onChangeProductClick={goHome}
        />

        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto p-6 space-y-12">
            <PackageContents items={manual.packageContents} />
            <HowToUse data={manual.howToUse} />
            <TreatmentGuide />
            <RedLightTherapy
              wavelengthCount={manual.wavelengthCount}
              showDualChipScience={manual.showDualChipScience}
            />
            <AdvancedFeatures show={manual.showAdvancedFeatures} />
            <AdditionalFeatures cards={manual.additionalFeatures ?? []} />
            <MaintenanceSafety />
            <FAQ />
            <Specifications data={manual.specifications} productName={manual.name} />
            <Warranty warrantyYears={manual.warrantyYears} />
          </div>
        </main>
      </div>
    </div>
  )
}
