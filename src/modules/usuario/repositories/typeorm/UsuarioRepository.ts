import Usuario from "../../models/Usuario"
import { EntityRepository, Repository, getRepository } from "typeorm";
import { IUsuarioRepository } from "../IUsuarioRepositorio";
import ICreateUsuarioDTO from "../../dtos/ICreateUsuarioDTO";



@EntityRepository(Usuario)
export default class UsuarioRepository implements IUsuarioRepository {
    private ormRepositorio: Repository<Usuario>;

    constructor() {
        this.ormRepositorio = getRepository(Usuario);
    }

    async buscarPorEmail(email: string): Promise<Usuario | undefined> {
        return await this.ormRepositorio.findOne({
            where: { email }
        });
    }

    async buscarPorId(id: number): Promise<Usuario | undefined> {
        return await this.ormRepositorio.findOne(id);
    }

    async create({ email, nome, senha }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = this.ormRepositorio.create({ nome, email, hash_senha: senha });

        return await this.ormRepositorio.save(usuario);
    }

    async save(usuario: Usuario): Promise<Usuario> {
        return await this.ormRepositorio.save(usuario);
    }
}