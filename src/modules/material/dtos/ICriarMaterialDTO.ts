import { IAtributos } from "../interfaces/IAtributos";

export default interface ICriarMaterialDTO {
    nome: string,
    descricao: string,
    imagem?: string,
    atributos?: IAtributos[],
} 