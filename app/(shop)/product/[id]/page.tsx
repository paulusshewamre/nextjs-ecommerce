import { Navbar } from "@/components/my/nav-bar"
import { getProductById } from "@/lib/db/products"
import { ProductView } from "@/components/my/product-view"
import { notFound } from "next/navigation"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const product = await getProductById(id)

  if (!product) return notFound()

  return (
    <>
      <Navbar />
      <ProductView product={product} />
    </>
  )
}