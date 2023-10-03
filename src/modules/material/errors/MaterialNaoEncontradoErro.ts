import AppError from "../../../errors/AppError";

export class MaterialNaoEncontradoErro extends AppError {
    constructor() {
        super('Material não encontrado.', 400)
    }
}