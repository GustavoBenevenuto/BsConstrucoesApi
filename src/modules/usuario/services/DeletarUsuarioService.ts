import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { UsuarioNaoEncontradoErro } from "../errors/UsuarioNaoEncontradoErro";


export class DeletarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute(id: string): Promise<boolean> {
        const usuario = await this.usuarioRepository.buscarPorId(id);

        if (!usuario) {
            throw new UsuarioNaoEncontradoErro()
        }

        const resultado = await this.usuarioRepository.delete(id)

        return resultado > 0 ? true : false
    }
};