import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateInstructor1654428315367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'instructors',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'cpf',
                        type: 'numeric',
                        isUnique: true
                    },
                    {
                        name: 'number',
                        type: 'varchar'
                    },
                    {
                        name: 'admin_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_instructors_admin',
                        columnNames: ['admin_id'],
                        referencedTableName: 'admin',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('instructors')
    }

}
