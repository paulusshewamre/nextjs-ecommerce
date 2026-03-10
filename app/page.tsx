import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signOutAction } from "./actions/auth"

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold underline text-center">
          Welcome to the E-commerce App
        </h1>
        <div className="mt-4 flex justify-center space-x-4">
          <Button className="ml-4" asChild> 
            <Link href="/login">Login</Link>
          </Button>
          <Button className="ml-4" asChild> 
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    ) 
}
return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center">
        Welcome to the E-commerce App
      </h1>
      <div>
        <p>user id : {session.user.id}</p>
        <form action={signOutAction}>
          <Button type="submit" className="ml-4">Sign Out</Button>
        </form>
      </div>
    </div>
  ) 
}