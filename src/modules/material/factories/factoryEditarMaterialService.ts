import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { EditarMaterialService } from "../services/EditarMaterialService";


export function factoryEditarMaterialService() {
    const materialRepository = new MaterialRepository()
    const criarMaterialService = new EditarMaterialService(materialRepository);

    return criarMaterialService
}