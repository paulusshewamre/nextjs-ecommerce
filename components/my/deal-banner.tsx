import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function DealBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-700 p-10 text-white">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* TEXT SIDE */}
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-zinc-300">
              Limited Time Offer
            </span>

            <h2 className="text-3xl font-bold md:text-4xl">
              Flash Sale
              <span className="block text-yellow-400">
                Up to 40% Off
              </span>
            </h2>

            <p className="max-w-md text-zinc-300">
              Discover amazing deals on electronics, fashion, and accessories.
              Don’t miss this limited-time promotion.
            </p>

            <div className="pt-2">
              <Button asChild size="lg">
                <Link href="/deals">
                  Shop Deals
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
              alt="Sale products"
              width={700}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}