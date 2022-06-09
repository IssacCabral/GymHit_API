import { Request, Response } from 'express'
import { UpdatePupilService } from '../../services/pupilServices/UpdatePupilService'

export class UpdatePupilController {
    async handle(request: Request, response: Response) {
        const pupil_id = request.params.id
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

        const service = new UpdatePupilService()
        const result = await service.execute({pupil_id, admin_id, name, number})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).json(result.data)
    }
}