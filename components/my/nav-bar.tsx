'use client'

import Link from "next/link"
import { ShoppingCart, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "../ui/mode-toggle"
import { useCart } from "@/components/my/cart-context"


export function Navbar() {
  const { items } = useCart()
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          Shoply
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm md:flex">
          <Link href="/shop" className="hover:text-primary">
            Shop
          </Link>
          <Link href="/categories" className="hover:text-primary">
            Categories
          </Link>
          <Link href="/deals" className="hover:text-primary">
            Deals
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </nav>

        {/* Search */}
        <div className="hidden w-72 items-center gap-2 md:flex">
          <Search className="size-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="h-9"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <div className="relative">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="size-5" />
              </Button>

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-xs font-medium text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <Button variant="outline" size="sm">
            <User className="mr-2 size-4" />
            Login
          </Button>
          <ModeToggle />

        </div>
      </div>
    </header>
  )
}