import Material from "../models/Material";

export default interface ICriarInformacaoMaterialDTO {
    material: Material;
    preco: number;
    quantidade: number;
} 