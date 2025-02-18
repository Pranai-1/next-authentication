//we can only import and call server actions,not import server-only functions

"use client";

import { useTransition } from "react";
import { logoutAction } from "../actions/logoutAction";

export default function CustomSignOut() {
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        startTransition(() => {
            logoutAction(); // Calls the server action
        });
    }

    return (
        <>
           
            <button onClick={handleClick} disabled={isPending} className={ ` ${isPending ? "bg-blue-300" :"bg-blue-600 "}p-2 px-4 rounded-md`}>
                {isPending ? "Logging out..." : "Logout"}
            </button>
        </>
    );
}
