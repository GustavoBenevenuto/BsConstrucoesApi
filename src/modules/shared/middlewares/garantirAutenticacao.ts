
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import autenticadorConfig from "../../../config/autenticador";
import { TokenNaoEncontradoErro } from '../errors/TokenNaoEncontradoErro';
import { TokenInvalidoErro } from '../errors/TokenInvalidoErro';
import { IRequestUser } from '../dtos/express/IRequestUsuario';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function garantirAutenticacao(request: IRequestUser, response: Response, next: NextFunction): void {

    const autenticacaoHeader = request.headers.authorization;

    if (!autenticacaoHeader) {
        throw new TokenNaoEncontradoErro()
    }

    const [tipoToken, token] = autenticacaoHeader.split(' ');

    try {
        const decodificado = verify(token, autenticadorConfig.jwt.secret) as TokenPayload;

        request.usuario = {
            id: Number(decodificado.sub)
        }

        return next();
    } catch {
        throw new TokenInvalidoErro;
    }
}