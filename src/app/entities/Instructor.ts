import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import { Admin } from './Admin'
import {v4 as uuid} from 'uuid'

@Entity('instructors')
export class Instructor{
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    cpf: number

    @Column()
    number: string

    @Column()
    admin_id: string

    @ManyToOne(() => Admin)
    @JoinColumn({name: 'admin_id'})
    admin: Admin

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}