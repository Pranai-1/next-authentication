"use server";


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
   console.log(credentials)
}
