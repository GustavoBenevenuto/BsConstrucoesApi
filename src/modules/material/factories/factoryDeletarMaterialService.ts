import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { DeletarMaterialService } from "../services/DeletarMaterialService";


export function factoryDeletarMaterialService() {
    const materialRepository = new MaterialRepository()
    const criarMaterialService = new DeletarMaterialService(materialRepository);

    return criarMaterialService
}