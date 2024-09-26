import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoutes = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])
const isAdminRoutes = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware((auth, request) => {
  /* const userId = auth().userId
  const doctorId = process.env.DOCTOR_CLERK_ID

  if (!isPublicRoutes(request)) {
    auth().protect()

    if (!isAdminRoutes(request)) {
      if (userId === doctorId) {
        return NextResponse.redirect(new URL('/admin', request.url))
      }
    } else {
      if (userId !== doctorId) {
        return NextResponse.redirect(new URL('/', request.url))
      }
    }
  } */
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
