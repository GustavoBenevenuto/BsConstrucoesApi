import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelas1696617250070 implements MigrationInterface {
    name = 'CriandoTabelas1696617250070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "hash_senha" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6e301df4fa95464831b2e6f8a81" UNIQUE ("email"), CONSTRAINT "PK_fea85fa13fe26913a53d66a44db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_material" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "imagem" character varying, "atributos" jsonb NOT NULL DEFAULT '[]', "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6a9213a5ab6289f7825c9338301" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_material"`);
        await queryRunner.query(`DROP TABLE "tb_usuario"`);
    }

}
