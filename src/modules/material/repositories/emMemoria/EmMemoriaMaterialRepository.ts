import { randomUUID } from "crypto";
import { IMaterialRepository } from "../IMaterialRepository";
import Material from "../../models/Material";
import ICriarMaterialDTO from "../../dtos/ICriarMaterialDTO";

export class EmMemoriaMaterialRepository implements IMaterialRepository {

    public materiais: Material[] = []

    async buscarPorId(id: string): Promise<Material | undefined> {
        const material = this.materiais.find((material) => material.id == id)
        if (!material) {
            return undefined
        }
        return material
    }

    async create({ nome, descricao, imagem, atributos, preco }: ICriarMaterialDTO): Promise<Material> {
        const material = {
            id: randomUUID(),
            descricao,
            imagem,
            atributos,
            preco,
            criado_em: new Date(),
            atualizado_em: new Date(),
        } as Material

        return material
    }

    async save(material: Material): Promise<Material> {
        this.materiais.push(material)
        return material
    }
}