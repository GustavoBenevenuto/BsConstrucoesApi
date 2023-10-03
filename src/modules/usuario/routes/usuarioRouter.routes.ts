import { Router } from 'express';
import AppError from '../../../errors/AppError';
import { z } from "zod";
import { factoryCriarUsuarioService } from '../factories/factoryCriarUsuarioService';

const usuarioRouter = Router();

usuarioRouter.post('/', async (request, response) => {
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(6),
        email: z.string().email(),
        senha: z.string().min(6),
    })

    const usuario = usuarioCorpoSchema.parse(request.body)

    const criarUsuarioService = factoryCriarUsuarioService()

    const usuarioCriado = criarUsuarioService.execute(usuario)

    return response.json(usuarioCriado);
});

export default usuarioRouter;