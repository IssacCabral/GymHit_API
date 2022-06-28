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
                        name: 'cnpj',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'fantasy_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'coorporate_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'telephone',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'district',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'numeric',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin')
    }

}
