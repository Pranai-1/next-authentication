"use server";
export async function loginAction(prevState:any,formData: FormData) {
    await new Promise((res,rej)=>{
        setTimeout(()=>{res(300)},2000)
    })
    console.log(formData);
}
