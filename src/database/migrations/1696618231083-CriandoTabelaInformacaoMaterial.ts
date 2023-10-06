import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelaInformacaoMaterial1696618231083 implements MigrationInterface {
    name = 'CriandoTabelaInformacaoMaterial1696618231083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_informacao_material" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco" integer NOT NULL, "criado_em" TIMESTAMP NOT NULL DEFAULT now(), "atualizado_em" TIMESTAMP NOT NULL DEFAULT now(), "id_material" uuid, CONSTRAINT "REL_873275a3681f7fab84b9442fb1" UNIQUE ("id_material"), CONSTRAINT "PK_d44ed8cd704d4a89641d4013cd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_informacao_material" ADD CONSTRAINT "FK_873275a3681f7fab84b9442fb1d" FOREIGN KEY ("id_material") REFERENCES "tb_material"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_informacao_material" DROP CONSTRAINT "FK_873275a3681f7fab84b9442fb1d"`);
        await queryRunner.query(`DROP TABLE "tb_informacao_material"`);
    }

}
