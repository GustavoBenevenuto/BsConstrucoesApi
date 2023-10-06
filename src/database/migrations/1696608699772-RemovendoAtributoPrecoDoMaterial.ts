import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovendoAtributoPrecoDoMaterial1696608699772 implements MigrationInterface {
    name = 'RemovendoAtributoPrecoDoMaterial1696608699772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_material" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "criado_em" SET DEFAULT '"2023-10-06T16:11:41.179Z"'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "atualizado_em" SET DEFAULT '"2023-10-06T16:11:41.179Z"'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT '"2023-10-06T16:11:41.303Z"'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT '"2023-10-06T16:11:41.303Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT '2023-10-03 21:46:09.186'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT '2023-10-03 21:46:09.186'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "atualizado_em" SET DEFAULT '2023-10-03 21:46:09.061'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ALTER COLUMN "criado_em" SET DEFAULT '2023-10-03 21:46:09.061'`);
        await queryRunner.query(`ALTER TABLE "tb_material" ADD "preco" integer NOT NULL`);
    }

}
