import { hash } from "bcryptjs";
import Usuario from "../models/Usuario";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";
import { UsuarioJaExisteErro } from "../errors/UsuarioJaExisteErro";
import { IUsuarioSemSenha } from "../interfaces/IUsuarioSemSenha";

export class CriarUsuarioService {
    constructor(private usuarioRepository: IUsuarioRepository) { }

    async execute({ nome, email, senha }: ICriarUsuarioDTO): Promise<IUsuarioSemSenha> {
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

        const usuarioRetornado: IUsuarioSemSenha = usuario
        delete usuarioRetornado.hash_senha

        return usuarioRetornado
    }
};