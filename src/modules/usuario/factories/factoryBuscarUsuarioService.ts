
import UsuarioRepository from "../repositories/typeorm/UsuarioRepository";
import { BuscarUsuarioService } from "../services/BuscarUsuarioService";

export function factoryBuscarUsuarioService() {
    const usuarioRepository = new UsuarioRepository()
    const service = new BuscarUsuarioService(usuarioRepository);

    return service
}