import { Pupil } from "../../entities/Pupil";
import dataSource from '../../../database/data-source'

interface PupilUpdateRequest{
    pupil_id: string,
    admin_id: string
    name: string,
    number: string
}

export class UpdatePupilService{
    async execute({pupil_id, admin_id, name, number}: PupilUpdateRequest){
        const pupilRepository = dataSource.getRepository(Pupil)
        const pupil = await pupilRepository.findOne({where: {id: pupil_id}})

        if(!pupil){
            return new Error('Pupil does not exists')
        }

        if(pupil.admin_id !== admin_id){
            return new Error('Not authorized for different admins')
        }

        await pupilRepository.update({id: pupil_id}, {name, number})
        return {data: 'Updated pupil!'}
    }
}