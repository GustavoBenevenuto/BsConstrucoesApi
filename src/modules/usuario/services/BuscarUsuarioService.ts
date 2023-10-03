import { hash } from "bcryptjs";
import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";
import AppError from "../../../errors/AppError";
import IEditarUsuarioDTO from "../dtos/IEditarUsuarioDTO";
import { UsuarioNaoEncontradoErro } from "../errors/UsuarioNaoEncontradoErro";
import { IUsuarioSemSenha } from "../interfaces/IUsuarioSemSenha";


export class BuscarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute(id: string): Promise<IUsuarioSemSenha> {
        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new UsuarioNaoEncontradoErro()
        }

        const usuarioRetornado: IUsuarioSemSenha = usuario
        delete usuarioRetornado.hash_senha

        return usuarioRetornado
    }
};