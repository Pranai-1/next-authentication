"use client";
import { useActionState } from "react";

import SubmitButton from "./SubmitButton";
import { loginAction } from "../actions/loginAction";
import Link from "next/link";


export default function CustomLogin() {
  const[state,action]=useActionState(loginAction,undefined)
  console.log(state)
    return (
        <form action={action}>
            <div className="flex flex-col justify-start items-start gap-3 text-sm sm:text-base">
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
