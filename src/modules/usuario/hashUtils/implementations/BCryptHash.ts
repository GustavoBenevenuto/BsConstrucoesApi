import { compare, hash } from "bcryptjs";
import IHash from "../models/IHash";

export default class BCryptHash implements IHash{
    public async gerarHash(payload: string){
        return await hash(payload, 8); 
    }
    
    public async compararHash(payload: string, hashed: string){
        return await compare(payload, hashed);
    }
}