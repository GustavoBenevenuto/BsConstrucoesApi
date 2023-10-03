import { Router } from 'express';
import AppError from '../../../errors/AppError';
import { z } from "zod";
import { factoryCriarMaterialService } from '../factories/factoryCriarMaterialService';
import Material from '../models/Material';
import { factoryEditarMaterialService } from '../factories/factoryEditarMaterialService';
import { factoryDeletarMaterialService } from '../factories/factoryDeletarMaterialService';
import { factoryBuscarMaterialService } from '../factories/factoryBuscarMaterialService';

const materialRouter = Router();

materialRouter.post('/', async (request, response) => {
    const materialCorpoSchema = z.object({
        nome: z.string().min(3),
        descricao: z.string().min(3),
        preco: z.number(),
        imagem: z.string().optional(),
        atributos: z.array(
            z.object({
                chave: z.string(),
                valor: z.string(),
            })
        ).optional(),
    })

    const material = materialCorpoSchema.parse(request.body)

    const criarMaterialService = factoryCriarMaterialService()

    const materialCriado = await criarMaterialService.execute(material as Material)

    return response.json(materialCriado);
});

materialRouter.patch('/:id', async (request, response) => {
    const materialCorpoSchema = z.object({
        nome: z.string().min(3),
        descricao: z.string().min(3),
        preco: z.number(),
        imagem: z.string().optional(),
        atributos: z.array(
            z.object({
                chave: z.string(),
                valor: z.string(),
            })
        ).optional(),
    })

    const materialParamsSchema = z.object({
        id: z.string(),
    })

    const { descricao, nome, preco, atributos, imagem } = materialCorpoSchema.parse(request.body)
    const { id } = materialParamsSchema.parse(request.params)

    const editarMaterialService = factoryEditarMaterialService()

    const materialRetornado = await editarMaterialService.execute({ descricao, nome, preco, atributos: atributos ? [] : atributos, imagem, id })
    return response.json(materialRetornado);
});

materialRouter.delete('/:id', async (request, response) => {
    const materialParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = materialParamsSchema.parse(request.params)

    const deletarMaterialService = factoryDeletarMaterialService()
    const deletado = await deletarMaterialService.execute(id)

    return response.json({ deletado });
});

materialRouter.get('/:id', async (request, response) => {
    const materialParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = materialParamsSchema.parse(request.params)

    const buscarMaterialService = factoryBuscarMaterialService()

    const materialRetornado = await buscarMaterialService.porId(id)

    return response.json(materialRetornado);
});

materialRouter.get('/todos', async (request, response) => {
    const buscarMaterialService = factoryBuscarMaterialService()

    const materialRetornado = await buscarMaterialService.buscarTodos()

    return response.json(materialRetornado);
});

export default materialRouter;