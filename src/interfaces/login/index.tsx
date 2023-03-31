import { IUserResponse } from "../users"

export interface IUserLogin {
    email: string
    password: string
}

export interface IValidation {
    token: string
    user: IUserResponse
}