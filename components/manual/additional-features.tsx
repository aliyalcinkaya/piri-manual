import {sectionTitles} from '@/content/manual/section-titles'
import type { FeatureCard } from "@/content/manual/types"

interface AdditionalFeaturesProps {
  cards: FeatureCard[]
  id?:string
}

export function AdditionalFeatures({ cards,id="additional-features" }: AdditionalFeaturesProps) {
  if (cards.length === 0) return null

  return (
    <section id={id} className="scroll-mt-20">
      <h2>{sectionTitles['additional-features']}</h2>
      <p>Controls and optional accessories can vary by hardware revision. If your device does not show the controls described below, contact Piri Red before following the sequence.</p>

      <div className="space-y-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="additional-control"
          >
            <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
            {card.body && <p className="text-gray-700 leading-relaxed">{card.body}</p>}
            {card.steps && card.steps.length > 0 && (
              <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed ml-2 mt-3">
                {card.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

