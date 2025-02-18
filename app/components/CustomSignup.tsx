"use client";
import { useActionState } from "react";

import SubmitButton from "./SubmitButton";
import { signupAction } from "../actions/signupAction";


export default function CustomSignup() {
  const[state,action]=useActionState(signupAction,undefined)
  console.log(state)
    return (
        <form action={action}>
            <div className="flex flex-col justify-start items-start gap-3 text-sm sm:text-base">
                <div className="flex flex-col gap-2 w-full ">
                    <label htmlFor="name">First name *</label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your name"
                        minLength={3} // Minimum of 2 characters
                        maxLength={8} // Maximum of 30 characters 
                        className="p-1 sm:p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                    {state?.errors?.name && (<p className="text-red-600 text-sm">{state.errors.name}</p>)}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email">Email *</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                     {state?.errors?.email && (<p className="text-red-600 text-sm">{state.errors.email}</p>)}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password">Password *</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
                    {state?.errors?.password && (<p className="text-red-600 text-sm">{state.errors.password}</p>)}
                </div>

                   <SubmitButton/>
               
            </div>
        </form>
    );
}
