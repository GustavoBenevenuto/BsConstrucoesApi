import { randomUUID } from "crypto";
import ICriarUsuarioDTO from "../../dtos/ICriarUsuarioDTO";
import Usuario from "../../models/Usuario";
import { IUsuarioRepository } from "../IUsuarioRepository";

export class EmMemoriaUsuarioRepository implements IUsuarioRepository {

    public usuarios: Usuario[] = []

    async buscarPorEmail(email: string): Promise<Usuario | undefined> {
        const usuario = this.usuarios.find((usuario) => usuario.email == email)
        if (!usuario) {
            return undefined
        }
        return usuario
    }

    async buscarPorId(id: string): Promise<Usuario | undefined> {
        const usuario = this.usuarios.find((usuario) => usuario.id == id)
        if (!usuario) {
            return undefined
        }
        return usuario
    }

    async create({ nome, email, senha }: ICriarUsuarioDTO): Promise<Usuario> {
        const usuario = {
            id: randomUUID(),
            nome,
            email,
            hash_senha: senha,
            criado_em: new Date(),
            atualizado_em: new Date(),
        } as Usuario

        this.usuarios.push(usuario)

        return usuario
    }

    async save(usuario: Usuario): Promise<Usuario> {
        this.usuarios.push(usuario)
        return usuario
    }

    async delete(id: string): Promise<number> {
        this.usuarios = this.usuarios.filter(usuario => usuario.id != id)

        const usuarioEncontrado = this.usuarios.find(usuario => usuario.id == id)

        return usuarioEncontrado ? 0 : 1
    }
}