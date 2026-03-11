import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}



// 'use client'

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Eye, EyeOff, Mail, Github } from "lucide-react"
// import { signUpAction as signUp } from "@/app/actions/auth"

// export default function SignUpPage() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-xl"
//       >

//         {/* Card */}
//         <div className="rounded-2xl border bg-card text-card-foreground shadow-xl p-10 space-y-8">

//           {/* Heading */}
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl font-bold tracking-tight">
//               Create an Account
//             </h1>
//             <p className="text-sm text-muted-foreground">
//               Please fill in the details to create your account
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-6" action={signUp}>

//             {/* Name */}
//             <div className="space-y-2">
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="John Doe"
//                 value={name}
//                 required
//                 className="h-11"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 required
//                 className="h-11"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   value={password}
//                   required
//                   className="h-11"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   aria-label="Toggle password visibility"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Terms / Submit */}
//             <Button type="submit" className="w-full h-12 text-lg">
//               Sign Up
//             </Button>
//           </form>

//           {/* Divider */}
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t border-border"></span>
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-card px-2 text-muted-foreground">
//                 Or continue with
//               </span>
//             </div>
//           </div>

//           {/* OAuth buttons */}
//           <div className="grid grid-cols-2 gap-4">
//             <Button variant="outline" className="h-11">
//               <Mail className="mr-2 h-4 w-4" />
//               Email
//             </Button>
//             <Button variant="outline" className="h-11">
//               <Github className="mr-2 h-4 w-4" />
//               GitHub
//             </Button>
//           </div>

//           {/* Login link */}
//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <a href="/login" className="text-primary font-medium hover:underline">
//               Sign in
//             </a>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   )
// }