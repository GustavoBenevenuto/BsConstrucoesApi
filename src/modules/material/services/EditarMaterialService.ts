import { MaterialNaoEncontradoErro } from "../errors/MaterialNaoEncontradoErro";
import Material from "../models/Material";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

export class EditarMaterialService {
    constructor(private materialRepository: IMaterialRepository) { }

    async execute({ id, nome, descricao, imagem, preco, atributos }: Omit<Material, 'criado_em' | 'atualizado_em'>): Promise<Material> {
        const material = await this.materialRepository.buscarPorId(id);

        if (!material) {
            throw new MaterialNaoEncontradoErro()
        }

        material.nome = nome
        material.descricao = descricao
        material.imagem = imagem
        material.preco = preco
        material.atributos = atributos
        material.atualizado_em = new Date()

        await this.materialRepository.save(material)

        return material
    }
};