import AppError from "../../../errors/AppError";

export class TokenNaoEncontradoErro extends AppError {
    constructor() {
        super('Token não encontrado.', 401)
    }
}