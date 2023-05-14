import { IUserRequest } from "../user"

export interface IUserLogin {
    email: string
    userPassword: string
}

export interface IValidation {
    token: string
    user: IUserRequest
}