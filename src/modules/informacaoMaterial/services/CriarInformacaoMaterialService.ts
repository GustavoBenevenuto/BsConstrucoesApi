import { MaterialNaoEncontradoErro } from "../../material/errors/MaterialNaoEncontradoErro";
import { IMaterialRepository } from "../../material/repositories/IMaterialRepository";
import ICriarInformacaoMaterialDTO from "../dtos/ICriarInformacaoMaterialDTO";
import InformacaoMaterial from "../models/InformacaoMaterial";
import { IInformacaoMaterialRepository } from "../repositories/IInformacaoMaterialRepository";

interface IRequestCriarInformacaoMaterial extends Omit<ICriarInformacaoMaterialDTO, 'material'> {
    idMaterial: string;
}

export class CriarInformacaoMaterialService {
    constructor(
        private informacaoMaterialRepository: IInformacaoMaterialRepository,
        private materialRepository: IMaterialRepository,
    ) { }

    async execute({ idMaterial, preco, quantidade }: IRequestCriarInformacaoMaterial): Promise<InformacaoMaterial> {
        const material = await this.materialRepository.buscarPorId(idMaterial)

        if (!material) {
            throw new MaterialNaoEncontradoErro()
        }

        const informacaoMaterial = await this.informacaoMaterialRepository.create({
            material,
            preco,
            quantidade
        })

        return informacaoMaterial
    }
};