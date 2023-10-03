import { hash } from "bcryptjs";
import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepositorio";
import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";
import { UsuarioJaExisteErro } from "../errors/UsuarioJaExisteErro";
interface IUsuarioRetornoService {
    usuario: Usuario
}

export class CriarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nome, email, senha }: ICriarUsuarioDTO): Promise<IUsuarioRetornoService> {
        const usuarioExiste = await this.usuarioRepository.buscarPorEmail(email);

        if (usuarioExiste) {
            throw new UsuarioJaExisteErro();
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