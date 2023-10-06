import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";
import Material from "../models/Material";
import { IMaterialRepository } from "../repositories/IMaterialRepository";


export class CriarMaterialService {
    constructor(private materialRepository: IMaterialRepository) { }

    async execute({ nome, descricao, atributos, imagem }: ICriarMaterialDTO): Promise<Material> {
        const material = await this.materialRepository.create({
            nome,
            descricao,
            atributos,
            imagem,
        })

        return material;
    }
};