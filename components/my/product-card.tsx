import Image from "next/image"
import Link from "next/link"

type Product = {
  id: string
  name: string
  price: number
  images: { url: string }[]
}

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0]?.url

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block space-y-3"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">
          {product.name}
        </h3>

        <p className="text-sm font-semibold">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}