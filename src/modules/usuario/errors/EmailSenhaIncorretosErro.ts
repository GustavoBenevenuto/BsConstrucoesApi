import AppError from "../../../errors/AppError";

export class EmailSenhaIncorretosErro extends AppError {
    constructor() {
        super('Email/Senha incorretos.', 401)
    }
}