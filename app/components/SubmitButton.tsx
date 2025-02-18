import { useFormStatus } from "react-dom"

export default function SubmitButton(){
    const {pending}=useFormStatus()
    return(
        <>
        <input
    className={`${pending ? 'bg-indigo-300 cursor-wait':'bg-[#5D5DFF] cursor-pointer'}  w-full rounded-lg font-medium text-center text-white p-2 sm:py-4 mt-3 text-lg`}
   disabled={pending}
    type="submit"
/>
        </>
    )
    
}