import { Request } from "express"

export interface IRequestUser extends Request {
    usuario: {
        id: number
    }
}