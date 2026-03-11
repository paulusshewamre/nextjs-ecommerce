"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  oldPrice?: string
  rating?: number
  image: string
  hoverImage?: string
}

export function ProductCard({
  name,
  price,
  oldPrice,
  rating = 4.5,
  image,
  hoverImage,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-xl border bg-background p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* SALE BADGE */}
      {oldPrice && (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
          SALE
        </span>
      )}

      {/* WISHLIST */}
      <button className="absolute right-4 top-4 z-20 rounded-full bg-white/80 p-2 backdrop-blur transition hover:bg-white">
        <Heart className="size-4" />
      </button>

      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden rounded-lg">

        {/* MAIN IMAGE */}
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-64 w-full object-cover transition duration-500 group-hover:opacity-0"
        />

        {/* HOVER IMAGE */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={name}
            width={500}
            height={500}
            className="absolute inset-0 h-64 w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          />
        )}

        {/* QUICK ADD BUTTON */}
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition duration-300 group-hover:opacity-100">
          <Button className="pointer-events-auto">
            <ShoppingCart className="mr-2 size-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-2">

        <h3 className="text-sm font-medium">{name}</h3>

        {/* RATING */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-yellow-400 stroke-none" />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">
            {rating}
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{price}</span>

          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice}
            </span>
          )}
        </div>

      </div>
    </div>
  )
}