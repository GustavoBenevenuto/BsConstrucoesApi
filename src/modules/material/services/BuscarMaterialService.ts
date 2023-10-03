import { MaterialNaoEncontradoErro } from "../errors/MaterialNaoEncontradoErro";
import Material from "../models/Material";
import { IMaterialRepository } from "../repositories/IMaterialRepository";

export class BuscarMaterialService {
    constructor(private materialRepository: IMaterialRepository) { }

    async porId(id: string): Promise<Material> {
        const material = await this.materialRepository.buscarPorId(id);

        if (!material) {
            throw new MaterialNaoEncontradoErro()
        }

        return material
    }

    async buscarTodos(): Promise<Material[]> {
        return await this.materialRepository.buscarTodos();
    }
};