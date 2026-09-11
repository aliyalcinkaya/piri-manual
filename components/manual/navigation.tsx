"use client"

import type { ComponentType } from "react"
import { Button } from "@/components/ui/button"
import {
  Eye,
  Zap,
  Shield,
  Settings,
  HelpCircle,
  FileText,
  Package,
  Wrench,
  Home,
  ArrowLeft,
  Sparkles,
  Lightbulb,
} from "lucide-react"

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "package-contents": Package,
  "how-to-use": Zap,
  "treatment-guide": FileText,
  "what-is-red-light": Eye,
  "advanced-features": Sparkles,
  "additional-features": Lightbulb,
  maintenance: Shield,
  faq: HelpCircle,
  specifications: Settings,
  warranty: Wrench,
}

export interface NavSection {
  id: string
  title: string
}

interface NavigationProps {
  sections: NavSection[]
  isMobileMenuOpen: boolean
  onSectionClick: (id: string) => void
  onHomeClick: () => void
  onChangeProductClick: () => void
}

export function Navigation({
  sections,
  isMobileMenuOpen,
  onSectionClick,
  onHomeClick,
  onChangeProductClick,
}: NavigationProps) {
  return (
    <nav
      className={`
        fixed lg:sticky top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 bg-background border-r
        transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="p-4 space-y-2 overflow-y-auto h-full">
        <div className="space-y-2 pb-4 border-b mb-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto py-3 px-3 text-left"
            onClick={onHomeClick}
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">Home</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto py-3 px-3 text-left"
            onClick={onChangeProductClick}
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">Change Product</span>
          </Button>
        </div>

        {sections.map((item) => {
          const Icon = ICONS[item.id] ?? FileText
          return (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start gap-3 h-auto py-3 px-3 text-left"
              onClick={() => onSectionClick(item.id)}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{item.title}</span>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}
