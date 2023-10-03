import {MigrationInterface, QueryRunner} from "typeorm";

export class AtualizandoCampoDeEmailParaQueSejaUnico1696352674894 implements MigrationInterface {
    name = 'AtualizandoCampoDeEmailParaQueSejaUnico1696352674894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_usuario" ADD CONSTRAINT "UQ_6e301df4fa95464831b2e6f8a81" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT '"2023-10-03T17:04:36.373Z"'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT '"2023-10-03T17:04:36.373Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "atualizado_em" SET DEFAULT '2023-10-03 16:26:36.183'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" ALTER COLUMN "criado_em" SET DEFAULT '2023-10-03 16:26:36.183'`);
        await queryRunner.query(`ALTER TABLE "tb_usuario" DROP CONSTRAINT "UQ_6e301df4fa95464831b2e6f8a81"`);
    }

}
