import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";
import Material from "../models/Material";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

interface IMaterialRetornoService {
    material: Material
}

export class CriarMaterialService {
    constructor(private materialRepository: IMaterialRepository) { }

    async execute({ nome, descricao, preco, atributos, imagem }: ICriarMaterialDTO): Promise<IMaterialRetornoService> {
        const material = await this.materialRepository.create({
            nome,
            descricao,
            preco,
            atributos,
            imagem,
        })

        return {
            material,
        };
    }
};