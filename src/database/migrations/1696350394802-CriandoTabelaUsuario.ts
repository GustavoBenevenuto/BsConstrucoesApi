import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelaUsuario1696350394802 implements MigrationInterface {
    name = 'CriandoTabelaUsuario1696350394802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "hash_senha" character varying NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T16:26:36.183Z"', "atualizado_em" TIMESTAMP NOT NULL DEFAULT '"2023-10-03T16:26:36.183Z"', CONSTRAINT "PK_fea85fa13fe26913a53d66a44db" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_usuario"`);
    }

}
