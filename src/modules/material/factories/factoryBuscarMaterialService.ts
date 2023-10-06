import InformacaoMaterialRepository from "../repositories/typeorm/InformacaoMaterialRepository";
import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { BuscarMaterialService } from "../services/BuscarMaterialService";


export function factoryBuscarMaterialService() {
    const materialRepository = new MaterialRepository()
    const informacaoMaterialRepository = new InformacaoMaterialRepository()
    const criarMaterialService = new BuscarMaterialService(materialRepository, informacaoMaterialRepository);

    return criarMaterialService
}