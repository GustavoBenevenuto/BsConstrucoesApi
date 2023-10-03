
import UsuarioRepository from "../repositories/typeorm/UsuarioRepository";
import { CriarUsuarioService } from "../services/CriarUsuarioService";

export function factoryCriarUsuarioService() {
    const usuarioRepository = new UsuarioRepository()
    const criarUsuarioService = new CriarUsuarioService(usuarioRepository);

    return criarUsuarioService
}