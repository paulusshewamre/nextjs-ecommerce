import { ProductCard } from "@/components/my/product-card"

const products = [
  {
    name: "Wireless Headphones",
    price: "$129",
    oldPrice: "$179",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9",
    hoverImage:
      "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    name: "Minimal Sneakers",
    price: "$89",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    hoverImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Smart Watch",
    price: "$199",
    oldPrice: "$249",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    hoverImage:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  },
  {
    name: "Classic Watch",
    price: "$149",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    hoverImage:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  },
]

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-3xl font-semibold">
        Featured Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}