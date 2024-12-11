import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

  const access = request.cookies.get('_auth')
  const refresh = request.cookies.get('_refresh')

  const response = NextResponse.next()

  // response.cookies.set('_auth', access!.value)
  // response.cookies.set('_refresh', refresh!.value)

  // console.log(response.cookies)
  return response

}