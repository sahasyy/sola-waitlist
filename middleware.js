// This middleware will handle server-side environment variable injection for Vercel
export default function middleware(request) {
  // When running on Vercel, this middleware will be executed
  // No modifications needed to the response as Vercel handles 
  // the environment variable replacement during build
  return request;
}

export const config = {
  matcher: [
    // Apply to all routes except API routes and static files
    '/((?!api|_next/static|favicon.ico|.*\\.).*)'
  ],
};