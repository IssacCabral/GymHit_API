import {Request, Response} from 'express'
import { DeletePupilService } from '../../services/pupilServices/DeletePupilService'

export class DeletePupilController{
    async handle(request: Request, response: Response){
        const pupil_id = request.params.id
        const admin_id = request.admin.admin_id

        const service = new DeletePupilService()
        const result = await service.execute({pupil_id, admin_id})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).end()
    }
}