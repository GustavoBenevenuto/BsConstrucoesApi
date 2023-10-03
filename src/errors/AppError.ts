export default class AppError{
    // readonly -> somente leitura
    public readonly mensagem: string;

    public readonly statusCode: number;

    constructor(mensagem: string, statusCode : number){
        this.mensagem = mensagem;
        this.statusCode = statusCode;
    }
}