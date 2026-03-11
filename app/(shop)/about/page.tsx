import { Navbar } from "@/components/my/nav-bar";

export default function Page() {
  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-muted-foreground mt-4">
        Learn more about our company and what we stand for.
      </p>
    </main>
    </>
  )
}