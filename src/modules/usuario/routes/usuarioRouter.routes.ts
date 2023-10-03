import { Router } from 'express';
import { z } from "zod";
import { factoryCriarUsuarioService } from '../factories/factoryCriarUsuarioService';
import { factoryEditarUsuarioService } from '../factories/factoryEditarUsuarioService';
import { factoryBuscarUsuarioService } from '../factories/factoryBuscarUsuarioService';

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
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(6),
    })

    const usuarioParamsSchema = z.object({
        id: z.string(),
    })

    const { nome } = usuarioCorpoSchema.parse(request.body)
    const { id } = usuarioParamsSchema.parse(request.params)

    const editarUsuarioService = factoryEditarUsuarioService()

    const usuario = await editarUsuarioService.execute({ nome, id })

    return response.json(usuario);
});

usuarioRouter.delete('/:id', async (request, response) => {

    return response.json({});
});

usuarioRouter.get('/:id', async (request, response) => {
    const usuarioParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = usuarioParamsSchema.parse(request.params)

    const buscarUsuarioService = factoryBuscarUsuarioService()

    const usuario = await buscarUsuarioService.execute(id)

    return response.json(usuario);
});

export default usuarioRouter;