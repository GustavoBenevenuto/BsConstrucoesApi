import { Request, Response } from 'express';
import { z } from 'zod';
import { factoryCriarInformacaoMaterialService } from '../factories/factoryCriarInformacaoMaterialService';

export class InformacaoMaterialController {
    public async criar(request: Request, response: Response): Promise<Response> {
        const informacaoMaterialCorpoSchema = z.object({
            preco: z.number(),
            quantidade: z.number(),
            id_material: z.string().min(5),
        })

        const { id_material, preco, quantidade } = informacaoMaterialCorpoSchema.parse(request.body)

        const criarInformacaoMaterialService = factoryCriarInformacaoMaterialService()

        const informacaoMaterialCriado = await criarInformacaoMaterialService.execute({ idMaterial: id_material, preco, quantidade })
        delete informacaoMaterialCriado.material

        return response.json(informacaoMaterialCriado);
    }

    // public async editar(request: Request, response: Response): Promise<Response> {
    //     const materialCorpoSchema = z.object({
    //         nome: z.string().min(3),
    //         descricao: z.string().min(3),
    //         imagem: z.string().optional(),
    //         atributos: z.array(
    //             z.object({
    //                 chave: z.string(),
    //                 valor: z.string(),
    //             })
    //         ).optional(),
    //     })

    //     const materialParamsSchema = z.object({
    //         id: z.string(),
    //     })

    //     const { descricao, nome, atributos, imagem } = materialCorpoSchema.parse(request.body)
    //     const { id } = materialParamsSchema.parse(request.params)

    //     const editarMaterialService = factoryEditarMaterialService()

    //     const materialRetornado = await editarMaterialService.execute({ descricao, nome, atributos: atributos ? atributos as any : [], imagem, id })
    //     return response.json(materialRetornado);
    // }

    // public async buscar(request: Request, response: Response): Promise<Response> {
    //     const materialParamsSchema = z.object({
    //         id: z.string(),
    //     })

    //     const { id } = materialParamsSchema.parse(request.params)

    //     const buscarMaterialService = factoryBuscarMaterialService()

    //     const materialRetornado = await buscarMaterialService.porId(id)

    //     return response.json(materialRetornado);
    // }

    // public async buscarTodos(request: Request, response: Response): Promise<Response> {
    //     const buscarMaterialService = factoryBuscarMaterialService()

    //     const materialRetornado = await buscarMaterialService.buscarTodos()

    //     return response.json(materialRetornado);
    // }

    // public async deletar(request: Request, response: Response): Promise<Response> {
    //     const materialParamsSchema = z.object({
    //         id: z.string(),
    //     })

    //     const { id } = materialParamsSchema.parse(request.params)

    //     const deletarMaterialService = factoryDeletarMaterialService()
    //     const deletado = await deletarMaterialService.execute(id)

    //     return response.json({ deletado });
    // }
}