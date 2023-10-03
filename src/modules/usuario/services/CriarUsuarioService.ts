import { hash } from "bcryptjs";
import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepositorio";
import ICreateUsuarioDTO from "../dtos/ICreateUsuarioDTO";
import AppError from "../../../errors/AppError";
interface IUsuarioRetornoService {
    usuario: Usuario
}

export class CriarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nome, email, senha }: ICreateUsuarioDTO): Promise<IUsuarioRetornoService> {
        const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);

        if (usuarioExiste) {
            throw new AppError('Usuário já existe!', 400);
        }

        const hashSenha = await hash(senha, 3)

        const usuario = await this.usuarioRepository.create({
            email,
            nome,
            senha: hashSenha
        })

        await this.usuarioRepository.save(usuario)

        return {
            usuario,
        };
    }
};