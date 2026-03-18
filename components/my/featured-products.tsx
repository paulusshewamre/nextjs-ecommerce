import { ProductCard } from "@/components/my/product-card"
import { getFeaturedProducts } from "@/lib/db/products"

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-3xl font-semibold">
        Featured Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}