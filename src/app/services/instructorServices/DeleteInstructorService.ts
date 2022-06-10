import { Instructor } from "../../entities/Instructor";
import dataSource from "../../../database/data-source";

interface DeleteInstructorRequest{
    instructor_id: string,
    admin_id: string
}

export class DeleteInstructorService{
    async execute({instructor_id, admin_id}: DeleteInstructorRequest){
        const instructorRepository = dataSource.getRepository(Instructor)
        const instructor = await instructorRepository.findOne({where: {id: instructor_id}})

        if(!instructor){
            return new Error('Instructor does not exists')
        }

        if(instructor.admin_id !== admin_id){
            return new Error('Not authorized for different admins')
        }

        await instructorRepository.delete(instructor_id)
    }
}