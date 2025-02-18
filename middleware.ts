import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./app/lib/session"




const protectedRoute=["/dashboard"]
const publicRoute=["/signup","/login"]
export default async function middleware(req:NextRequest){
    const path=req.nextUrl.pathname
    const isProtected=protectedRoute.includes(path)
    const isPublic=publicRoute.includes(path)

    const cookie=(await cookies()).get("session")?.value
    const session=await decrypt(cookie)

    if((isProtected && !session?.userId)  || (isPublic && session?.userId))
        return NextResponse.redirect(new URL("/",req.nextUrl))
  NextResponse.next()
}