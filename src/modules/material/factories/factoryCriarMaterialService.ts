import InformacaoMaterialRepository from "../repositories/typeorm/InformacaoMaterialRepository";
import MaterialRepository from "../repositories/typeorm/MaterialRepository";
import { CriarMaterialService } from "../services/CriarMaterialService";


export function factoryCriarMaterialService() {
    const materialRepository = new MaterialRepository()
    const informacaoMaterialRepository = new InformacaoMaterialRepository()

    const criarMaterialService = new CriarMaterialService(materialRepository, informacaoMaterialRepository);

    return criarMaterialService
}