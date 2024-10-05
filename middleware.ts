import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
    console.log('[request]', request.nextUrl.pathname)
    // if (request.nextUrl.pathname === '/products') {
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
}

export const config = {
    // matcher:'/about/:path?'          // Now the middleware will only be run on this route whatever condition is placed on top
    matcher:'/products/:path*'
}