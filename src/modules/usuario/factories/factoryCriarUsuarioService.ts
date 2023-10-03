import UsuarioRepository from "../repositories/typeorm/usuarioRepository";
import { CriarUsuarioService } from "../services/CriarUsuarioService";

export function factoryCriarUsuarioService() {
    const usuarioRepository = new UsuarioRepository()
    const criarUsuarioService = new CriarUsuarioService(usuarioRepository);

    return criarUsuarioService
}