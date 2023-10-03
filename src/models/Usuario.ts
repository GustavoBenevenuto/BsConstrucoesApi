import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('tb_usuario')
export default class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    senha: string;

    @CreateDateColumn({ default: new Date() })
    criado_em: Date;

    @CreateDateColumn({ default: new Date() })
    atualizado_em: Date;
}