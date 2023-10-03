import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { BuscarMaterialService } from "../services/BuscarMaterialService";


export function factoryBuscarMaterialService() {
    const materialRepository = new MaterialRepository()
    const criarMaterialService = new BuscarMaterialService(materialRepository);

    return criarMaterialService
}