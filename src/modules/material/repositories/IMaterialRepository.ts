import { FindOneOptions } from "typeorm";
import Material from "../models/Material";
import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";

export interface IMaterialRepository {
    buscarPorId(id: string): Promise<Material | undefined>;
    create(dados: ICriarMaterialDTO): Promise<Material>;
    save(usuario: Material): Promise<Material>;
}