import { Pupil } from "../../entities/Pupil";
import dataSource from "../../../database/data-source";

export class GetAllPupilsService{
    async execute(admin_id: string){
        const pupilRepository = dataSource.getRepository(Pupil)
        const pupils = await pupilRepository.find({where: {admin_id}})
        
        return pupils
    }
}