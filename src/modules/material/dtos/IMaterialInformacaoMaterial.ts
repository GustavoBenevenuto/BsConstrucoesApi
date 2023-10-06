import InformacaoMaterial from "../models/InformacaoMaterial";
import Material from "../models/Material";

export interface IMaterialInformacaoMaterial extends Material {
    informacaoMaterial?: InformacaoMaterial
}