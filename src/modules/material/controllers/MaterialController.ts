import { Request, Response } from 'express';
import { z } from 'zod';
import { factoryBuscarMaterialService } from '../factories/factoryBuscarMaterialService';
import { factoryCriarMaterialService } from '../factories/factoryCriarMaterialService';
import { factoryEditarMaterialService } from '../factories/factoryEditarMaterialService';
import { factoryDeletarMaterialService } from '../factories/factoryDeletarMaterialService';

export class MaterialController {
    public async criar(request: Request, response: Response): Promise<Response> {
        const materialCorpoSchema = z.object({
            nome: z.string().min(3),
            descricao: z.string().min(3),
            imagem: z.string().optional(),
            atributos: z.array(
                z.object({
                    chave: z.string(),
                    valor: z.string(),
                })
            ).optional(),
            informacao_material: z.object({
                material: z.any(),
                quantidade: z.number(),
                preco: z.number(),
            })
        })

        const material = materialCorpoSchema.parse(request.body)

        const criarMaterialService = factoryCriarMaterialService()

        const materialCriado = await criarMaterialService.execute(material as any)

        return response.json(materialCriado);
    }

    public async editar(request: Request, response: Response): Promise<Response> {
        const materialCorpoSchema = z.object({
            nome: z.string().min(3),
            descricao: z.string().min(3),
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

        const { descricao, nome, atributos, imagem } = materialCorpoSchema.parse(request.body)
        const { id } = materialParamsSchema.parse(request.params)

        const editarMaterialService = factoryEditarMaterialService()

        const materialRetornado = await editarMaterialService.execute({ descricao, nome, atributos: atributos ? atributos as any : [], imagem, id })
        return response.json(materialRetornado);
    }

    public async buscar(request: Request, response: Response): Promise<Response> {
        const materialParamsSchema = z.object({
            id: z.string(),
        })

        const { id } = materialParamsSchema.parse(request.params)

        const buscarMaterialService = factoryBuscarMaterialService()

        const materialRetornado = await buscarMaterialService.porId(id)

        return response.json(materialRetornado);
    }

    public async buscarTodos(request: Request, response: Response): Promise<Response> {
        const buscarMaterialService = factoryBuscarMaterialService()

        const materialRetornado = await buscarMaterialService.buscarTodos()

        return response.json(materialRetornado);
    }

    public async deletar(request: Request, response: Response): Promise<Response> {
        const materialParamsSchema = z.object({
            id: z.string(),
        })

        const { id } = materialParamsSchema.parse(request.params)

        const deletarMaterialService = factoryDeletarMaterialService()
        const deletado = await deletarMaterialService.execute(id)

        return response.json({ deletado });
    }
}