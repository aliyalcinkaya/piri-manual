import type { FeatureCard } from "@/content/manual/types"

interface AdditionalFeaturesProps {
  cards: FeatureCard[]
}

export function AdditionalFeatures({ cards }: AdditionalFeaturesProps) {
  if (cards.length === 0) return null

  return (
    <section id="additional-features" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Additional Features &amp; Tips</h2>

      <div className="space-y-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-gradient-to-br ${card.accent ?? "from-gray-50 to-gray-100"} p-6 rounded-lg border`}
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
