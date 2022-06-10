import { Instructor } from "../../entities/Instructor";
import dataSource from '../../../database/data-source'

interface InstructorUpdateRequest{
    instructor_id: string,
    admin_id: string
    name: string,
    number: string
}

export class UpdateInstructorService{
    async execute({instructor_id, admin_id, name, number}: InstructorUpdateRequest){
        const instructorRepository = dataSource.getRepository(Instructor)
        const instructor = await instructorRepository.findOne({where: {id: instructor_id}})

        if(!instructor){
            return new Error('Instructor does not exists')
        }

        if(instructor.admin_id !== admin_id){
            return new Error('Not authorized for different admins')
        }

        await instructorRepository.update({id: instructor_id}, {name, number})
        return {data: 'Updated instructor!'}
    }
}