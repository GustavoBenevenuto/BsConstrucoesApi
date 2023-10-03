import { FindOneOptions } from "typeorm";
import Usuario from "../models/Usuario";
import ICreateUsuarioDTO from "../dtos/ICreateUsuarioDTO";

export interface IUsuarioRepository {
    buscarPorId(id: number): Promise<Usuario | undefined>;
    buscarPorEmail(email: string): Promise<Usuario | undefined>;
    create(dados: ICreateUsuarioDTO): Promise<Usuario>;
    save(usuario: Usuario): Promise<Usuario>;
}