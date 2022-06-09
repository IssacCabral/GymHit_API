import { Request, Response } from "express";
import { GetAllPupilsService } from "../../services/pupilServices/GetAllPupilsService";

export class GetAllPupilsController{
    async handle(request: Request, response: Response){
        const service = new GetAllPupilsService()
        console.log(request.admin)
        const admin_id = request.admin.admin_id
        const pupils = await service.execute(admin_id)
        
        return response.json(pupils)
    }
}