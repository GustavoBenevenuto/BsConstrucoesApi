import { FindOneOptions } from "typeorm";
import Material from "../models/Material";
import ICriarMaterialDTO from "../dtos/ICriarMaterialDTO";

export interface IMaterialRepository {
    buscarPorId(id: string): Promise<Material | undefined>;
    buscarTodos(): Promise<Material[]>;
    create(dados: ICriarMaterialDTO): Promise<Material>;
    delete(id: string): Promise<number>;
    save(usuario: Material): Promise<Material>;
}