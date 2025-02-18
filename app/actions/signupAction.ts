"use server";



import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { createSession } from "../lib/session";
import { UserCredentials } from "../types";
import { signupSchema } from "../zodSchema";

export async function signupAction(prevState:any,formData: FormData) {
   const result=signupSchema.safeParse(Object.fromEntries(formData))
   if(!result.success)
   {
    console.log(result)
    return {
        errors:result.error.flatten().fieldErrors
    }
   }
   const credentials:UserCredentials=result.data
   let user
   try{
      user=await prisma.user.create({
        data:{
            ...credentials,
        },
     })
    
   }catch(error){
    console.log(error)
   }

   if(user){
    await createSession(user.id)
    return redirect("/dashboard");
 }
}
