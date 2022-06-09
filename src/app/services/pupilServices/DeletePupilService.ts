import { Pupil } from "../../entities/Pupil";
import dataSource from "../../../database/data-source";

interface DeletePupilRequest{
    pupil_id: string,
    admin_id: string
}

export class DeletePupilService{
    async execute({pupil_id, admin_id}: DeletePupilRequest){
        const pupilRepository = dataSource.getRepository(Pupil)
        const pupil = await pupilRepository.findOne({where: {id: pupil_id}})

        if(!pupil){
            return new Error('Pupil does not exists')
        }

        if(pupil.admin_id !== admin_id){
            return new Error('Not authorized for different admins')
        }

        await pupilRepository.delete(pupil_id)
    }
}