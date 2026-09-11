"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { productList } from "@/content/manual/index"

export default function ProductSelection() {
  const router = useRouter()

  const handleProductSelect = (productId: string) => {
    router.push(`/manual/${productId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-balance">Piri Red</h1>
              <p className="text-sm text-muted-foreground">User Manuals</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-balance">Select Your Product</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Choose your Piri Red Light Therapy device to access its complete user manual and support documentation.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productList.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductSelect(product.id)}
              >
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={product.cardImage || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm text-pretty">{product.tagline}</p>

                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full group-hover:bg-red-600 group-hover:text-white transition-colors bg-transparent"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProductSelect(product.id)
                    }}
                  >
                    View Manual
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can't find your product or need additional support? Contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
                <Button variant="outline" size="sm">
                  Download All Manuals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
