
import { EntityRepository, Repository, getRepository } from "typeorm";
import InformacaoMaterial from "../../models/InformacaoMaterial";
import ICriarInformacaoMaterialDTO from "../../dtos/ICriarInformacaoMaterialDTO";
import { IInformacaoMaterialRepository } from "../IInformacaoMaterialRepository";



@EntityRepository(InformacaoMaterial)
export default class InformacaoMaterialRepository implements IInformacaoMaterialRepository {
    private ormRepositorio: Repository<InformacaoMaterial>;

    constructor() {
        this.ormRepositorio = getRepository(InformacaoMaterial);
    }

    async buscarPorId(id: string): Promise<InformacaoMaterial | undefined> {
        return await this.ormRepositorio.findOne(id);
    }

    async create({ material, preco, quantidade }: ICriarInformacaoMaterialDTO): Promise<InformacaoMaterial> {
        const informacaoMaterial = this.ormRepositorio.create({ material, preco, quantidade });

        return await this.ormRepositorio.save(informacaoMaterial);
    }

    async save(informacaoMaterial: InformacaoMaterial): Promise<InformacaoMaterial> {
        return await this.ormRepositorio.save(informacaoMaterial);
    }

    async delete(id: string): Promise<number> {
        const resultado = await this.ormRepositorio.delete(id);

        // affected == 0 Nenhum registro deletado
        return resultado.affected ?? 0
    }

    async buscarTodos(): Promise<InformacaoMaterial[] | []> {
        return await this.ormRepositorio.find();
    }
}