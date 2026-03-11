import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Electronics",
    href: "/categories/electronics",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    name: "Shoes",
    href: "/categories/shoes",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    name: "Watches",
    href: "/categories/watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Headphones",
    href: "/categories/headphones",
    image:
      "https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9",
  },
  {
    name: "Fashion",
    href: "/categories/fashion",
    image:
      "https://images.unsplash.com/photo-1520975922284-6b4c6f8c1e2b",
  },
  {
    name: "Accessories",
    href: "/categories/accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group relative overflow-hidden rounded-xl border"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={600}
              height={400}
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-white">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}