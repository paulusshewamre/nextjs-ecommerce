import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProductView({ product }: { product: any }) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">

        <Image
          src={product.images[0]?.url}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl"
        />

        <div className="space-y-6">

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold">
            ${product.price}
          </p>

          <p className="text-muted-foreground">
            {product.description}
          </p>

          <Button size="lg">
            Add to Cart
          </Button>

        </div>

      </div>
    </main>
  )
}