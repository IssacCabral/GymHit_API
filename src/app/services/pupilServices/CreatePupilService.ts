import { Pupil } from "../../entities/Pupil";
import { Admin } from "../../entities/Admin";
import dataSource from "../../../database/data-source";

interface PupilRequest{
    name: string
    cpf: number
    number: string
    admin_id: string
}

export class CreatePupilService{
    async execute({name, cpf, number, admin_id}: PupilRequest): Promise<Pupil | Error>{
        const pupilRepository = dataSource.getRepository(Pupil)
        const adminRepository = dataSource.getRepository(Admin)

        if(await pupilRepository.findOne({where: {cpf}})){
            return new Error('Cpf already exists')
        }

        if(!await adminRepository.findOne({where: {id: admin_id}})){
            return new Error('Admin does not exists')
        }


        const pupil = pupilRepository.create({
            name,
            cpf,
            number,
            admin_id
        })

        await pupilRepository.save(pupil)

        return pupil
    }
}