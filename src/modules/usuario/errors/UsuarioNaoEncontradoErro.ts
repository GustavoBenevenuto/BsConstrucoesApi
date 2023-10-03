import AppError from "../../../errors/AppError";

export class UsuarioNaoEncontradoErro extends AppError {
    constructor() {
        super('Usuário não encontrado!', 400)
    }
}