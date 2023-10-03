
import { EntityRepository, Repository, getRepository } from "typeorm";
import { IMaterialRepository } from "../IMaterialRepository";
import Material from "../../models/Material";
import ICriarMaterialDTO from "../../dtos/ICriarMaterialDTO";



@EntityRepository(Material)
export default class MaterialRepository implements IMaterialRepository {
    private ormRepositorio: Repository<Material>;

    constructor() {
        this.ormRepositorio = getRepository(Material);
    }

    async buscarPorEmail(email: string): Promise<Material | undefined> {
        return await this.ormRepositorio.findOne({
            where: { email }
        });
    }

    async buscarPorId(id: string): Promise<Material | undefined> {
        return await this.ormRepositorio.findOne(id);
    }

    async create({ nome, descricao, imagem, preco, atributos }: ICriarMaterialDTO): Promise<Material> {
        const material = this.ormRepositorio.create({ nome, descricao, imagem, preco, atributos });

        return await this.ormRepositorio.save(material);
    }

    async save(material: Material): Promise<Material> {
        return await this.ormRepositorio.save(material);
    }

    async delete(id: string): Promise<number> {
        const resultado = await this.ormRepositorio.delete(id);

        // affected == 0 Nenhum registro deletado
        return resultado.affected ?? 0
    }

    async buscarTodos(): Promise<Material[] | []> {
        // const result = await this.ormRepositorio.find();
        // console.log({ result })
        return []
    }
}