

export type LoginCredentials={
    email:string,
    password:string
}
export type SignupCredentials=LoginCredentials &{
    name:string,
}

export type UserDB=SignupCredentials & {
    id:string
    emailVerified:boolean
}

export type SessionPayload = {
    userId: string;
    expiresAt: Date;
  };