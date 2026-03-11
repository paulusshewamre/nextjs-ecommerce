'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          <span className="w-fit rounded-full border px-3 py-1 text-sm text-muted-foreground">
            New Collection 2026
          </span>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Discover Products
            <span className="block text-primary">
              Designed For You
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            Shop the latest tech, fashion, and lifestyle products.
            Premium quality with fast delivery and unbeatable deals.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">

            <Button size="lg" asChild>
              <Link href="/shop">
                <ShoppingBag className="mr-2 size-4" />
                Shop Now
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/categories">
                Browse Categories
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

          </div>

          {/* TRUST SIGNALS */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <span>🚚 Free Shipping</span>
            <span>↩ 30 Day Returns</span>
            <span>⭐ 10k+ Happy Customers</span>
          </div>

        </div>

        {/* RIGHT SIDE (PRODUCT SHOWCASE) */}
        <div className="relative">

          <div className="grid grid-cols-2 gap-4">

            <Image
              src="https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9"
              alt="Headphones"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />

            <Image
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
              alt="Sneakers"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />

            <Image
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
              alt="Smartwatch"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />

            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Watch"
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />

          </div>

        </div>
      </div>
    </section>
  )
}