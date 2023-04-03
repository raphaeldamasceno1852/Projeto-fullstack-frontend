import { IUserRequest } from "../user"

export interface IUserLogin {
    email: string
    password: string
}

export interface IValidation {
    token: string
    user: IUserRequest
}