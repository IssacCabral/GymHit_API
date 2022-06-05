import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdmin1654394200564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'admin',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'gym_email',
                        type: 'varchar'
                    },
                    {
                        name: 'gym_name',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin')
    }

}
