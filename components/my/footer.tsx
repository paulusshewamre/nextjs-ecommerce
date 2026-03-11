import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* FOOTER GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Shoply</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Your destination for quality products, great deals,
              and a seamless shopping experience.
            </p>

            <div className="mt-4 flex gap-3">
              <Facebook className="size-5 cursor-pointer text-muted-foreground hover:text-primary" />
              <Instagram className="size-5 cursor-pointer text-muted-foreground hover:text-primary" />
              <Twitter className="size-5 cursor-pointer text-muted-foreground hover:text-primary" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop">All Products</Link>
              </li>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/deals">Deals</Link>
              </li>
              <li>
                <Link href="/new">New Arrivals</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/help">Help Center</Link>
              </li>
              <li>
                <Link href="/returns">Returns</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Info</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shoply. All rights reserved.
        </div>

      </div>
    </footer>
  )
}