// import { authClient } from "@/lib/auth-client"; //import the auth client
// import { redirect } from "next/navigation";

// const { data, error } = await authClient.signUp.email({
//         email, // user email address
//         password, // user password -> min 8 characters by default
//         name, // user display name
//         callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
//     }, {
//         onRequest: (ctx) => {
//             //show loading
//             redirect("/loading") // redirect to a loading page while the request is being processed
//         },
//         onSuccess: (ctx) => {
//             //redirect to the dashboard or sign in page
//             redirect("/") // redirect to the login page after successful sign up
//         },
//         onError: (ctx) => {
//             // display the error message
//             alert(ctx.error.message);
//             redirect("/error")
//         },
// });