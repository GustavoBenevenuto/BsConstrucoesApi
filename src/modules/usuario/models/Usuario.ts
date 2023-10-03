import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('tb_usuario')
export default class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    hash_senha: string;

    @CreateDateColumn({ default: new Date() })
    criado_em: Date;

    @CreateDateColumn({ default: new Date() })
    atualizado_em: Date;
}