import MaterialRepository from "../../material/repositories/typeorm/MaterialRepository";
import InformacaoMaterialRepository from "../repositories/typeorm/InformacaoMaterialRepository";
import { CriarInformacaoMaterialService } from "../services/CriarInformacaoMaterialService";


export function factoryCriarInformacaoMaterialService() {
    const informacaoMaterialRepository = new InformacaoMaterialRepository()
    const materialRepository = new MaterialRepository()
    const criarMaterialService = new CriarInformacaoMaterialService(informacaoMaterialRepository, materialRepository);

    return criarMaterialService
}