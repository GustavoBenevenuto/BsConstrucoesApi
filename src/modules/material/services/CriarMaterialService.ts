import ICriarInformacaoMaterialDTO from "../dtos/ICriarInformacaoMaterialDTO";
import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";
import Material from "../models/Material";
import { IInformacaoMaterialRepository } from "../repositories/IInformacaoMaterialRepository";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

interface IMaterialRetornoService {
    material: Material
}

interface ICriarMaterialInformacaoMaterialDTO extends ICriarMaterialDTO {
    informacao_material: ICriarInformacaoMaterialDTO
}

export class CriarMaterialService {
    constructor(private materialRepository: IMaterialRepository, private informacaoMaterialRepository: IInformacaoMaterialRepository) { }

    async execute({ nome, descricao, atributos, imagem, informacao_material }: ICriarMaterialInformacaoMaterialDTO): Promise<IMaterialRetornoService> {
        const material = await this.materialRepository.create({
            nome,
            descricao,
            atributos,
            imagem,
        })

        const infoMaterial = await this.informacaoMaterialRepository.create({
            material,
            preco: informacao_material.preco,
            quantidade: informacao_material.quantidade
        })

        material.informacao_material = infoMaterial
        delete material.informacao_material.material

        return {
            material
        };
    }
};