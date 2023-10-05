export default interface IHash {
    gerarHash(payload: string): Promise<string>;
    compararHash(payload : string, hashed: string): Promise<boolean>;
}