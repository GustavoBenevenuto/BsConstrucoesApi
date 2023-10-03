import { hash } from "bcryptjs";
import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";
import AppError from "../../../errors/AppError";
import IEditarUsuarioDTO from "../dtos/IEditarUsuarioDTO";
import { UsuarioNaoEncontradoErro } from "../errors/UsuarioNaoEncontradoErro";

interface IUsuarioRetornoService {
    usuario: Usuario
}

export class EditarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nome, id }: IEditarUsuarioDTO): Promise<IUsuarioRetornoService> {
        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new UsuarioNaoEncontradoErro()
        }

        usuario.nome = nome
        usuario.atualizado_em = new Date()

        return {
            usuario,
        };
    }
};