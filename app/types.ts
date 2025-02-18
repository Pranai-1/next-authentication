export type UserCredentials={
    name:string,
    email:string,
    password:string
}

export type UserDB=UserCredentials & {
    id:string
    emailVerified:boolean
}