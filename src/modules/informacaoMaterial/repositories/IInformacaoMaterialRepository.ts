import InformacaoMaterial from "../models/InformacaoMaterial";
import ICriarInformacaoMaterialDTO from "../dtos/ICriarInformacaoMaterialDTO";

export interface IInformacaoMaterialRepository {
    buscarPorId(id: string): Promise<InformacaoMaterial | undefined>;
    create(dados: ICriarInformacaoMaterialDTO): Promise<InformacaoMaterial>;
    delete(id: string): Promise<number>;
    save(usuario: InformacaoMaterial): Promise<InformacaoMaterial>;
}