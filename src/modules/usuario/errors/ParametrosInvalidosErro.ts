import AppError from "../../../errors/AppError";

export class ParametrosInvalidosErro extends AppError {
    constructor() {
        super('Parâmetros inválidos.', 400)
    }
}