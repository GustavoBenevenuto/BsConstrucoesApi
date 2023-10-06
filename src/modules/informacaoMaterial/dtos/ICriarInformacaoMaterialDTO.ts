import Material from "../../material/models/Material";

export default interface ICriarInformacaoMaterialDTO {
    material: Material;
    preco: number;
    quantidade: number;
} 