export interface IClientRequest {
    id: string
    fullname: string
    email: string
    telefone: string
    registeredAt: Date
    updatedAt: Date
    deletedAt: Date
    userId: string
}

export interface IClientUpdate {
    id: string
    fullname?: string
    email?: string
    telefone?: string
}