import {MigrationInterface, QueryRunner} from "typeorm";

export class IncluindoTabelaInformacaoMaterial1696612886901 implements MigrationInterface {
    name = 'IncluindoTabelaInformacaoMaterial1696612886901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_informcao_material" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco" integer NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), "id_material" uuid, CONSTRAINT "REL_4ac97d2444ef58e401ab4c09c3" UNIQUE ("id_material"), CONSTRAINT "PK_b5b8511d80dc8c0699bc7a6a97f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "criado_em" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "atualizado_em" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tb_informcao_material" ADD CONSTRAINT "FK_4ac97d2444ef58e401ab4c09c32" FOREIGN KEY ("id_material") REFERENCES "tb_material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_informcao_material" DROP CONSTRAINT "FK_4ac97d2444ef58e401ab4c09c32"`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT '2023-10-06 16:11:41.303'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT '2023-10-06 16:11:41.303'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "atualizado_em" SET DEFAULT '2023-10-06 16:11:41.179'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "criado_em" SET DEFAULT '2023-10-06 16:11:41.179'`);
        await queryRunner.query(`DROP TABLE "tb_informcao_material"`);
    }

}
