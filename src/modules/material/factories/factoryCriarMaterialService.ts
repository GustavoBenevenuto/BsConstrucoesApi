import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { CriarMaterialService } from "../services/CriarMaterialService";


export function factoryCriarMaterialService() {
    const materialRepository = new MaterialRepository()
    const criarMaterialService = new CriarMaterialService(materialRepository);

    return criarMaterialService
}