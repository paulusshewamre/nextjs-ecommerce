import { getCategoryBySlug } from "@/lib/db/categories"
import { ProductCard } from "@/components/my/product-card"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/my/nav-bar"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const category = await getCategoryBySlug(slug)

  if (!category) return notFound()

  return (
    <>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-16">

            <h1 className="mb-10 text-3xl font-bold">
                {category.name}
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {category.products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
                ))}
            </div>

        </main>
    </>
    
  )
}