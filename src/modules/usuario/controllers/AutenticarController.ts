import { Request, Response } from 'express';
import AutenticarUsuarioService from '../services/AutenticarUsuarioService';
import { factoryAutenticarUsuarioService } from '../factories/factoryAutenticarUsuarioService';

// Controller deve ter por padrão [index=vários, show=um, create, update e delete]

export default class AutenticarController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, senha } = request.body;

        const autenticarSessaoUsuarioService = factoryAutenticarUsuarioService()

        const autenticacao = await autenticarSessaoUsuarioService.execute({ email, senha });

        return response.json({ usuario: autenticacao.usuario, token: autenticacao.token });
    }
}