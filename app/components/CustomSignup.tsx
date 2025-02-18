

export default function CustomSignup() {
    async function loginAction(formData: FormData) {
        "use server";
        console.log(formData);
    }

    return (
        <form action={loginAction}>
            <div className="flex flex-col justify-start items-start gap-3 text-sm sm:text-base">
                <div className="flex flex-col gap-2 w-full ">
                    <label htmlFor="firstName">First name *</label>
                    <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        minLength={2} // Minimum of 2 characters
                        maxLength={3} // Maximum of 30 characters 
                        className="p-1 sm:p-2 border-2 border-[#B7BDC2] hover:border-[#5B89EF]"
                    />
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
                </div>

                <input
                    className="bg-[#5D5DFF] cursor-pointer w-full rounded-lg font-medium text-center text-white p-2 sm:py-4 mt-3 text-lg"
                    type="submit"
                />
                   
               
            </div>
        </form>
    );
}
