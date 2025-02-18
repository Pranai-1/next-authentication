"use server";



import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import { createSession } from "../../lib/session";
import { LoginCredentials } from "../types";
import { loginSchema } from "../zodSchema";

export async function loginAction(prevState:any,formData: FormData) {
   const result=loginSchema.safeParse(Object.fromEntries(formData))
   if(!result.success)
   {
    console.log(result)
    return {
        errors:result.error.flatten().fieldErrors
    }
   }
   const credentials:LoginCredentials=result.data
   let user
   try{
      user=await prisma.user.findUnique({
        where:{
            ...credentials,
        },
     })
    
   }catch(error){
    console.log(error)
   }

   if(user){
    await createSession(user)
    return redirect("/dashboard");
 }
}
