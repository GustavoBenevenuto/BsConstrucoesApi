import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, OneToOne, } from 'typeorm';
import Material from './Material';

@Entity('tb_informcao_material')
export default class InformacaoMaterial {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    quantidade: number;

    @Column({ nullable: false })
    preco: number;

    @OneToOne(type => Material, informacaoMaterial => InformacaoMaterial)
    @JoinColumn({ name: 'id_material' })
    material?: Material

    @CreateDateColumn({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    criado_em: Date;

    @CreateDateColumn({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    atualizado_em: Date;
}