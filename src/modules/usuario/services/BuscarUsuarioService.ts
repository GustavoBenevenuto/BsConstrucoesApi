import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { UsuarioNaoEncontradoErro } from "../errors/UsuarioNaoEncontradoErro";


export class BuscarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute(id: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new UsuarioNaoEncontradoErro()
        }

        return usuario
    }
};