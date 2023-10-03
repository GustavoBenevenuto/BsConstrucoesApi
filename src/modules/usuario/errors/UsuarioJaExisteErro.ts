import AppError from "../../../errors/AppError";

export class UsuarioJaExisteErro extends AppError {
    constructor() {
        super('Usuário já existe.', 400)
    }
}