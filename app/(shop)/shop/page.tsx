import { Navbar } from "@/components/my/nav-bar"
import { ProductCard } from "@/components/my/product-card"

const products = [
  {
    name: "Wireless Headphones",
    price: "$129",
    image: "https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9",
  },
  {
    name: "Minimal Sneakers",
    price: "$89",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
]

export default function ShopPage() {
  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="mb-10 text-4xl font-bold">
        Shop Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

    </main>
    </>
  )
}