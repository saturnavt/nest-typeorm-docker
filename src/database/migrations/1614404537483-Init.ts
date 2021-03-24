import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1614404537483 implements MigrationInterface {
    name = 'Init1614404537483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" int NOT NULL IDENTITY(1,1), "title" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "done" bit NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
