


import GoogleSignIn from "../components/GoogleSignInForm"

import CustomSignup from "../components/CustomSignup";
import Link from "next/link";

export default function Signup(){

   
    return(
        <div className="p-3 bg-black flex justify-center items-center h-screen flex-wrap">
           
            <div className="w-[95%] sm:w-[450px] h-max mt-10 bg-[#FFFFFF] p-2 sm:p-5 rounded-lg sm:px-10">
                <p className="sm:text-xl m-5 text-center font-medium">Register with your email</p>
             <CustomSignup/>
                <div className="mt-6 w-[100%] flex flex-col gap-3 items-center justify-center">
                        <p className="text-center font-medium">OR</p>
                 <GoogleSignIn/>
                        
                    </div>
                    <div className="text-blue-600 p-2 font-medium mt-4 flex justify-center">
                    <Link  href="/login">Already a member? Login here.</Link>
                    </div>
                    
            </div>
          
        </div>
    )
}
