import { auth } from "@/auth";

import SignoutButton from "./components/SignOutButton";
import getUserSession from "@/lib/getUserSession";
import CustomSignOut from "./components/CustomSignOut";
import UpdatePassword from "./components/UpdatePassword";


export default async function Home() {
  const session=await auth() 
  let customSession
  if(!session){
     customSession= await getUserSession()
  }
  
  console.log(session,customSession)
  return (
   <div>
    <p>Welcome to next authentication</p>
    {session && <SignoutButton/> }
     {customSession && <CustomSignOut/>}
     {session?.user?.email && <UpdatePassword email={session.user?.email}/>}
   </div>
  );
}
