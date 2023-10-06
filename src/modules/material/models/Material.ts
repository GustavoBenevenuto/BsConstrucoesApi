import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { IAtributos } from '../interfaces/IAtributos';
import InformacaoMaterial from '../../informacaoMaterial/models/InformacaoMaterial';

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

    @Column({ type: 'jsonb', nullable: false, default: () => "'[]'" })
    atributos?: IAtributos[];

    @OneToOne(type => InformacaoMaterial, material => Material)
    informacaoMaterial?: InformacaoMaterial

    @CreateDateColumn({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    criado_em: Date;

    @CreateDateColumn({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    atualizado_em: Date;
}