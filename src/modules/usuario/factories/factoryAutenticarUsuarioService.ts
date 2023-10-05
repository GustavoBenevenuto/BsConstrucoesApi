
import BCryptHash from "../hashUtils/implementations/BCryptHash";
import UsuarioRepository from "../repositories/typeorm/UsuarioRepository";
import AutenticarUsuarioService from "../services/AutenticarUsuarioService";

export function factoryAutenticarUsuarioService() {
    const bCryptHash = new BCryptHash();

    const usuarioRepository = new UsuarioRepository()
    const service = new AutenticarUsuarioService(usuarioRepository, bCryptHash);

    return service
}