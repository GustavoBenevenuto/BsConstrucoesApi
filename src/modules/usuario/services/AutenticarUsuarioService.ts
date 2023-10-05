import { sign } from 'jsonwebtoken';
import autenticadorConfig from "../../../config/autenticador";
import IHash from '../hashUtils/models/IHash';
import { IUsuarioRepository } from '../repositories/IUsuarioRepository';
import { EmailSenhaIncorretosErro } from '../errors/EmailSenhaIncorretosErro';
import { IUsuarioSemSenha } from '../interfaces/IUsuarioSemSenha';

interface IRequest {
    email: string;
    senha: string;
}

interface IRetorno {
    usuario: IUsuarioSemSenha,
    token: string
}

export default class AutenticarUsuarioService {

    private usuarioRepositorio: IUsuarioRepository;
    private hash: IHash;

    constructor(usuarioRepositorio: IUsuarioRepository, hash: IHash) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.hash = hash;
    }

    public async execute({ email, senha }: IRequest): Promise<IRetorno> {

        const usuario = await this.usuarioRepositorio.buscarPorEmail(email);

        if (!usuario) {
            throw new EmailSenhaIncorretosErro();
        }

        const senhaConicide = await this.hash.compararHash(senha, usuario.hash_senha);

        if (!senhaConicide) {
            throw new EmailSenhaIncorretosErro();
        }

        // Gerar Token
        const token = sign(
            {}, // Nesse local ficaria as permissões por exemplo 
            autenticadorConfig.jwt.secret,
            {
                subject: usuario.id.toString(),
                expiresIn: autenticadorConfig.jwt.expiresIn
            }
        );

        const usuarioSemSenha: IUsuarioSemSenha = usuario
        delete usuarioSemSenha.hash_senha

        return { usuario: usuarioSemSenha, token }
    }
}