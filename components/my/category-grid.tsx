import Image from "next/image"
import Link from "next/link"

type Category = {
  id: string
  name: string
  slug: string
}

export function CategoryGrid({ categories }: { categories: Category[] }) {
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
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden rounded-xl border"
          >

            <Image
              src={`/categories/${category.slug}.jpg`}
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