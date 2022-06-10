import {Request, Response} from 'express'
import { DeleteInstructorService } from '../../services/instructorServices/DeleteInstructorService'

export class DeleteInstructorController{
    async handle(request: Request, response: Response){
        const instructor_id = request.params.id
        const admin_id = request.admin.admin_id

        const service = new DeleteInstructorService()
        const result = await service.execute({instructor_id, admin_id})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).end()
    }
}