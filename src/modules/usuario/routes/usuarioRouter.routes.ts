import { Router } from 'express';
import { z } from "zod";
import { factoryCriarUsuarioService } from '../factories/factoryCriarUsuarioService';
import { factoryEditarUsuarioService } from '../factories/factoryEditarUsuarioService';
import { factoryBuscarUsuarioService } from '../factories/factoryBuscarUsuarioService';
import { IUsuarioSemSenha } from '../interfaces/IUsuarioSemSenha';
import { factoryDeletarUsuarioService } from '../factories/factoryDeletarUsuarioService';

const usuarioRouter = Router();

usuarioRouter.post('/', async (request, response) => {
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(3),
        email: z.string().email(),
        senha: z.string().min(6),
    })

    const usuario = usuarioCorpoSchema.parse(request.body)

    const criarUsuarioService = factoryCriarUsuarioService()

    const usuarioRetornado: IUsuarioSemSenha = await criarUsuarioService.execute(usuario)
    delete usuarioRetornado.hash_senha

    return response.json(usuarioRetornado);
});

usuarioRouter.patch('/:id', async (request, response) => {
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(3),
    })

    const usuarioParamsSchema = z.object({
        id: z.string(),
    })

    const { nome } = usuarioCorpoSchema.parse(request.body)
    const { id } = usuarioParamsSchema.parse(request.params)

    const editarUsuarioService = factoryEditarUsuarioService()

    const usuarioRetornado: IUsuarioSemSenha = await editarUsuarioService.execute({ nome, id })
    delete usuarioRetornado.hash_senha

    return response.json(usuarioRetornado);
});

usuarioRouter.delete('/:id', async (request, response) => {
    const usuarioParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = usuarioParamsSchema.parse(request.params)

    const deletarUsuarioService = factoryDeletarUsuarioService()
    const deletado = await deletarUsuarioService.execute(id)

    return response.json({ deletado });
});

usuarioRouter.get('/:id', async (request, response) => {
    const usuarioParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = usuarioParamsSchema.parse(request.params)

    const buscarUsuarioService = factoryBuscarUsuarioService()

    const usuarioRetornado: IUsuarioSemSenha = await buscarUsuarioService.execute(id)
    delete usuarioRetornado.hash_senha

    return response.json(usuarioRetornado);
});

export default usuarioRouter;