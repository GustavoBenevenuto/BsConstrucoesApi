import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandotabelaUsuarioEMaterail1696369567593 implements MigrationInterface {
    name = 'CriandotabelaUsuarioEMaterail1696369567593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_material" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "imagem" character varying, "preco" integer NOT NULL, "atributos" jsonb NOT NULL DEFAULT '[]', "criado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T21:46:09.061Z"', "atualizado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T21:46:09.061Z"', CONSTRAINT "PK_6a9213a5ab6289f7825c9338301" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "hash_senha" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T21:46:09.186Z"', "atualizado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T21:46:09.186Z"', CONSTRAINT "UQ_6e301df4fa95464831b2e6f8a81" UNIQUE ("email"), CONSTRAINT "PK_fea85fa13fe26913a53d66a44db" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_usuario"`);
        await queryRunner.query(`DROP TABLE "tb_material"`);
    }

}
