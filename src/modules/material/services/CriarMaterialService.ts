import ICriarInformacaoMaterialDTO from "../dtos/ICriarInformacaoMaterialDTO";
import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";
import Material from "../models/Material";
import { IMaterialRepository } from "../repositories/IMaterialRepository";
import InformacaoMaterialRepository from "../repositories/typeorm/InformacaoMaterialRepository";

interface IMaterialRetornoService {
    material: Material
}

interface ICriarMaterialInformacaoMaterialDTO extends ICriarMaterialDTO {
    informacaoMaterial: ICriarInformacaoMaterialDTO
}

export class CriarMaterialService {
    constructor(private materialRepository: IMaterialRepository, private informacaoMaterialRepository: InformacaoMaterialRepository) { }

    async execute({ nome, descricao, atributos, imagem, informacaoMaterial }: ICriarMaterialInformacaoMaterialDTO): Promise<IMaterialRetornoService> {
        const material = await this.materialRepository.create({
            nome,
            descricao,
            atributos,
            imagem,
        })

        const infoMaterial = await this.informacaoMaterialRepository.create({
            material,
            preco: informacaoMaterial.preco,
            quantidade: informacaoMaterial.quantidade
        })

        material.informacaoMaterial = infoMaterial
        delete material.informacaoMaterial.material

        return {
            material
        };
    }
};