import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { IAtributos } from '../interfaces/IAtributos';

@Entity('tb_material')
export default class Material {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    descricao: string;

    @Column({ nullable: true })
    imagem?: string;

    @Column({ nullable: false })
    preco: number;

    @Column({ type: 'jsonb', nullable: false, default: () => "'[]'" })
    atributos?: IAtributos[];

    @CreateDateColumn({ default: new Date() })
    criado_em: Date;

    @CreateDateColumn({ default: new Date() })
    atualizado_em: Date;
}