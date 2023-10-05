import AppError from "../../../errors/AppError";

export class TokenInvalidoErro extends AppError {
    constructor() {
        super('Token inválido.', 401)
    }
}