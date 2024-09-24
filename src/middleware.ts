import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes

const isPublicRoutes = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default clerkMiddleware((auth, request) => {
  // if (!isPublicRoutes(request)) {
  //   auth().protect()
  // }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
