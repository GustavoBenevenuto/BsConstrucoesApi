import { Router } from 'express';
import AppError from '../../../errors/AppError';
import { z } from "zod";
import { factoryCriarMaterialService } from '../factories/factoryCriarMaterialService';
import Material from '../models/Material';

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

    return response.json({});
});

materialRouter.delete('/:id', async (request, response) => {

    return response.json({});
});

materialRouter.get('/:id', async (request, response) => {

    return response.json({});
});

export default materialRouter;