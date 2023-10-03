import { Router } from 'express';
import AppError from '../../../errors/AppError';
import { z } from "zod";
import { factoryCriarUsuarioService } from '../factories/factoryCriarUsuarioService';
import { UsuarioNaoEncontradoErro } from '../errors/UsuarioNaoEncontradoErro';
import { ParametrosInvalidosErro } from '../errors/ParametrosInvalidosErro';
import { factoryEditarUsuarioService } from '../factories/factoryEditarUsuarioService';

const usuarioRouter = Router();

usuarioRouter.post('/', async (request, response) => {
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(3),
        email: z.string().email(),
        senha: z.string().min(6),
    })

    const usuario = usuarioCorpoSchema.parse(request.body)

    const criarUsuarioService = factoryCriarUsuarioService()

    const usuarioCriado = await criarUsuarioService.execute(usuario)

    return response.json(usuarioCriado);
});

usuarioRouter.patch('/:id', async (request, response) => {
    const id = request.params.id;
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(6),
    })

    if (!id) {
        throw new ParametrosInvalidosErro()
    }

    const { nome } = usuarioCorpoSchema.parse(request.body)

    const editarUsuarioService = factoryEditarUsuarioService()

    const { usuario } = await editarUsuarioService.execute({ nome, id })

    return response.json(usuario);
});

export default usuarioRouter;