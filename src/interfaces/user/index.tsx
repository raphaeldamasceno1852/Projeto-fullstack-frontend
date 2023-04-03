export interface IUserRequest {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    phone: string
    isAdm?: boolean
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}
  