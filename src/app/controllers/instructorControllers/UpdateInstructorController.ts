import { Request, Response } from 'express'
import { UpdateInstructorService } from '../../services/instructorServices/UpdateInstructorService'

export class UpdateInstructorController {
    async handle(request: Request, response: Response) {
        const instructor_id = request.params.id
        const admin_id = request.admin.admin_id
        const { name, number } = request.body

        const mandatoryData = ['name', 'number']
        const errors: Array<any> = []

        mandatoryData.forEach(element => {
            if (!request.body[element]) {
                errors.push({
                    field: element,
                    message: `O campo ${element} é obrigatório`
                })
            }
        })

        if(errors.length > 0){
            return response.status(400).json(errors)
        }

        const service = new UpdateInstructorService()
        const result = await service.execute({instructor_id, admin_id, name, number})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).json(result.data)
    }
}