import { Truck, ShieldCheck, RefreshCcw, Star } from "lucide-react"

const trustItems = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% secure payment with encrypted checkout",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "30-day return policy for worry-free shopping",
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "Trusted by thousands of happy customers",
  },
]

export function TrustSection() {
  return (
    <section className="border-y bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Shop With Us
          </h2>
          <p className="mt-2 text-muted-foreground">
            We provide the best shopping experience for our customers
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow">
                  <Icon className="size-6 text-primary" />
                </div>

                <h3 className="font-medium">{item.title}</h3>

                <p className="text-sm text-muted-foreground max-w-xs">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}