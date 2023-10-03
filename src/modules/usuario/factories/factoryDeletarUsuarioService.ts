
import UsuarioRepository from "../repositories/typeorm/UsuarioRepository";
import { DeletarUsuarioService } from "../services/DeletarUsuarioService";

export function factoryDeletarUsuarioService() {
    const usuarioRepository = new UsuarioRepository()
    const service = new DeletarUsuarioService(usuarioRepository);

    return service
}