import "server-only"
import { cookies } from "next/headers"
import { decrypt } from "./session"


export default async function getUserSession(){
    const cookie=(await cookies()).get("session")?.value
   return await decrypt(cookie)
}