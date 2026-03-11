'use client'

import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ArrowRight, Menu, ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const menuItems = [
  { name: 'Shop', href: '#' },
  { name: 'Categories', href: '#' },
  { name: 'Deals', href: '#' },
  { name: 'Contact', href: '#' },
]

const featuredProducts = [
  {
    name: 'Wireless Headphones',
    price: '$129',
    image:
      'https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9',
  },
  {
    name: 'Minimal Sneakers',
    price: '$89',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
  },
  {
    name: 'Smart Watch',
    price: '$199',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
  },
]

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <>
      {/* NAVBAR */}
      <header>
        {/* <nav className="fixed z-20 w-full border-b bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between py-4">

              <Link href="/" className="flex items-center gap-2">
                <Logo />
              </Link>

              <ul className="hidden gap-8 lg:flex">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-black dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  Login
                </Button>

                <Button size="sm">
                  <ShoppingCart className="size-4" />
                  Cart
                </Button>

                <button
                  onClick={() => setMenuState(!menuState)}
                  className="lg:hidden"
                >
                  {menuState ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </nav> */}
      </header>

      {/* HERO */}
      <main className="pt-28">
        <section className="relative">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* TEXT */}
              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  New Collection 2026
                </span>

                <h1 className="mt-4 text-5xl font-bold leading-tight">
                  Discover Your
                  <span className="block text-primary">
                    Perfect Style
                  </span>
                </h1>

                <p className="mt-6 text-lg text-muted-foreground">
                  Shop the latest fashion, tech, and lifestyle products.
                  Premium quality, fast delivery, and unbeatable deals.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="#">
                      Shop Now
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline">
                    Explore Deals
                  </Button>
                </div>

                {/* TRUST SIGNALS */}
                <div className="mt-8 flex gap-6 text-sm text-muted-foreground">
                  <span>🚚 Free Shipping</span>
                  <span>↩ 30 Day Returns</span>
                  <span>⭐ Top Rated</span>
                </div>
              </div>

              {/* HERO PRODUCT IMAGE */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="hero product"
                  width={800}
                  height={700}
                  className="rounded-2xl shadow-xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-24 pb-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-3xl font-semibold text-center">
              Featured Products
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {featuredProducts.map((product, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border p-4 hover:shadow-lg transition"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="group-hover:scale-105 transition"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-medium">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground">
                    {product.price}
                  </p>

                  <Button className="mt-4 w-full">
                    Add to Cart
                  </Button>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}