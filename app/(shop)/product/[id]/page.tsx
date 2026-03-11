import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/my/nav-bar"

export default function ProductPage() {
  return (
    <>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-12 lg:grid-cols-2">

        <Image
          src="https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9"
          alt="product"
          width={600}
          height={600}
          className="rounded-xl"
        />

        <div className="space-y-6">

          <h1 className="text-3xl font-bold">
            Wireless Headphones
          </h1>

          <p className="text-2xl font-semibold">
            $129
          </p>

          <p className="text-muted-foreground">
            Premium wireless headphones with noise cancellation
            and long battery life.
          </p>

          <Button size="lg">
            Add to Cart
          </Button>

        </div>

      </div>

    </main>
    </>
    
  )
}