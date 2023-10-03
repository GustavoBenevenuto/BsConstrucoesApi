import { FindOneOptions } from "typeorm";
import Usuario from "../models/Usuario";
import ICriarUsuarioDTO from "../dtos/ICriarUsuarioDTO";

export interface IUsuarioRepository {
    buscarPorId(id: string): Promise<Usuario | undefined>;
    buscarPorEmail(email: string): Promise<Usuario | undefined>;
    delete(id: string): Promise<number>;
    create(dados: ICriarUsuarioDTO): Promise<Usuario>;
    save(usuario: Usuario): Promise<Usuario>;
}