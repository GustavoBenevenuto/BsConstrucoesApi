import IHash from "../models/IHash";

export default class FakeHash implements IHash{
    public async gerarHash(payload: string){
        return payload;
    }
    
    public async compararHash(payload: string, hashed: string){
        return payload === hashed;
    }
}