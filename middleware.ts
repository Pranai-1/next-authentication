import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./lib/session"
import getUserSession from "./lib/getUserSession"
import { auth } from "./auth"
import { SessionPayload } from "./app/types"




const protectedRoute=["/dashboard"]
const publicRoute=["/signup","/login"]
export default async function middleware(req:NextRequest){
    const path=req.nextUrl.pathname
    const isProtected=protectedRoute.includes(path)
    const isPublic=publicRoute.includes(path)

     const session=await auth() || await getUserSession() as SessionPayload
console.log(session)

    if((isProtected && !session?.user?.email)  || (isPublic && session?.user?.email))
        return NextResponse.redirect(new URL("/",req.nextUrl))
  NextResponse.next()
}