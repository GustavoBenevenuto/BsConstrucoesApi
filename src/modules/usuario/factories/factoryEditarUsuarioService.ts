
import UsuarioRepository from "../repositories/typeorm/UsuarioRepository";
import { EditarUsuarioService } from "../services/EditarUsuarioService";

export function factoryEditarUsuarioService() {
    const usuarioRepository = new UsuarioRepository()
    const service = new EditarUsuarioService(usuarioRepository);

    return service
}