import { Instructor } from "../../entities/Instructor";
import dataSource from "../../../database/data-source";

export class GetAllInstructorsService{
    async execute(admin_id: string){
        const instructorRepository = dataSource.getRepository(Instructor)
        const instructors = await instructorRepository.find({where: {admin_id}})
        
        return instructors
    }
}