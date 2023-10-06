import { IMaterialInformacaoMaterial } from "../dtos/IMaterialInformacaoMaterial";
import { MaterialNaoEncontradoErro } from "../errors/MaterialNaoEncontradoErro";
import { IInformacaoMaterialRepository } from "../repositories/IInformacaoMaterialRepository";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

export class BuscarMaterialService {
    constructor(
        private materialRepository: IMaterialRepository,
        private informacaoMaterialRepository: IInformacaoMaterialRepository
    ) { }

    async porId(id: string): Promise<IMaterialInformacaoMaterial> {
        const material = await this.materialRepository.buscarPorId(id);

        if (material) {
            const informacaoInformacaoMaterial = await this.informacaoMaterialRepository.buscarPorIdMaterial(material.id)
            if (informacaoInformacaoMaterial) {
                material.informacaoMaterial = informacaoInformacaoMaterial
            }
        }

        if (!material) {
            throw new MaterialNaoEncontradoErro()
        }

        return material
    }

    async buscarTodos(): Promise<IMaterialInformacaoMaterial[]> {
        const materiais = await this.materialRepository.buscarTodos();
        await Promise.all(
            materiais.map((async material => {
                const informacaoInformacaoMaterial = await this.informacaoMaterialRepository.buscarPorIdMaterial(material.id)
                if (informacaoInformacaoMaterial) {
                    material.informacaoMaterial = informacaoInformacaoMaterial
                }
            }))
        )

        console.log({ materiais })
        return materiais
    }
};