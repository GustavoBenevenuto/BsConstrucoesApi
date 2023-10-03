import { MaterialNaoEncontradoErro } from "../errors/MaterialNaoEncontradoErro";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

export class DeletarMaterialService {
    constructor(private materialRepository: IMaterialRepository) { }

    async execute(id: string): Promise<boolean> {
        const material = await this.materialRepository.buscarPorId(id);

        if (!material) {
            throw new MaterialNaoEncontradoErro()
        }

        const resultado = await this.materialRepository.delete(id)

        return resultado > 0 ? true : false
    }
};