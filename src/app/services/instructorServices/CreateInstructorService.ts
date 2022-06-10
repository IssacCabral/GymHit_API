import { Instructor } from "../../entities/Instructor";
import { Admin } from "../../entities/Admin";
import dataSource from "../../../database/data-source";

interface InstructorRequest{
    name: string
    cpf: number
    number: string
    admin_id: string
}

export class CreateInstructorService{
    async execute({name, cpf, number, admin_id}: InstructorRequest): Promise<Instructor | Error>{
        const instructorRepository = dataSource.getRepository(Instructor)
        const adminRepository = dataSource.getRepository(Admin)

        if(await instructorRepository.findOne({where: {cpf}})){
            return new Error('Cpf already exists')
        }

        if(!await adminRepository.findOne({where: {id: admin_id}})){
            return new Error('Admin does not exists')
        }


        const instructor = instructorRepository.create({
            name,
            cpf,
            number,
            admin_id
        })

        await instructorRepository.save(instructor)

        return instructor
    }
}