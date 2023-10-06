import { randomUUID } from "crypto";
import { IInformacaoMaterialRepository } from "../IInformacaoMaterialRepository";
import InformacaoMaterial from "../../models/InformacaoMaterial";
import ICriarInformacaoMaterialDTO from "../../dtos/ICriarInformacaoMaterialDTO";

export class EmMemoriaInformacaoInformacaoMaterialRepository implements IInformacaoMaterialRepository {

    public informacaoMateriais: InformacaoMaterial[] = []

    async buscarPorId(id: string): Promise<InformacaoMaterial | undefined> {
        const informacaoInformacaoMaterial = this.informacaoMateriais.find((informacaoInformacaoMaterial) => informacaoInformacaoMaterial.id == id)
        if (!informacaoInformacaoMaterial) {
            return undefined
        }
        return informacaoInformacaoMaterial
    }

    async create({ material, preco, quantidade }: ICriarInformacaoMaterialDTO): Promise<InformacaoMaterial> {
        const informacaoInformacaoMaterial = {
            id: randomUUID(),
            preco,
            quantidade,
            material,
            criado_em: new Date(),
            atualizado_em: new Date(),
        } as InformacaoMaterial

        return informacaoInformacaoMaterial
    }

    async save(informacaoInformacaoMaterial: InformacaoMaterial): Promise<InformacaoMaterial> {
        this.informacaoMateriais.push(informacaoInformacaoMaterial)
        return informacaoInformacaoMaterial
    }

    async delete(id: string): Promise<number> {
        this.informacaoMateriais = this.informacaoMateriais.filter(informacaoInformacaoMaterial => informacaoInformacaoMaterial.id != id)

        const informacaoInformacaoMaterialEncontrado = this.informacaoMateriais.find(informacaoInformacaoMaterial => informacaoInformacaoMaterial.id == id)

        return informacaoInformacaoMaterialEncontrado ? 0 : 1
    }

    async buscarTodos(): Promise<InformacaoMaterial[] | []> {
        return this.informacaoMateriais
    }
}