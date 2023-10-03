import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import IEditarUsuarioDTO from "../dtos/IEditarUsuarioDTO";
import { UsuarioNaoEncontradoErro } from "../errors/UsuarioNaoEncontradoErro";

export class EditarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nome, id }: IEditarUsuarioDTO): Promise<Usuario> {
        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new UsuarioNaoEncontradoErro()
        }

        usuario.nome = nome
        usuario.atualizado_em = new Date()

        await this.usuarioRepository.save(usuario)

        return usuario
    }
};