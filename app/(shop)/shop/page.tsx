import { Navbar } from "@/components/my/nav-bar"
import { ProductCard } from "@/components/my/product-card"
import { Button } from "@/components/ui/button"
import { getFilteredProducts } from "@/lib/db/products"

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string
    sort?: string
  }>
}) {

  const params = await searchParams

  const products = await getFilteredProducts({
    category: params.category,
    sort: params.sort,
  })

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            Shop Products
          </h1>

          <form method="GET">
            <select
              name="sort"
              defaultValue={params.sort}
              className="rounded-md border px-3 py-2"
            >
              <option value="">Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>

            <Button type="submit">Apply</Button>
          </form>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
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