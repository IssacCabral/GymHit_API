import {Entity, Column, CreateDateColumn, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('admin')
export class Admin{
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    name: string

    @Column()
    gym_email: string

    @Column()
    gym_name: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}