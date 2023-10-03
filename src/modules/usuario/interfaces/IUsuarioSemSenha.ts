import Usuario from "../models/Usuario";

export interface IUsuarioSemSenha extends Omit<Usuario, "hash_senha"> {
    hash_senha?: string
}