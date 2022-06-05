import { Request, Response } from "express";
import { GetAllAdminService } from "../../services/adminServices/GetAllAdminService";

export class GetAllAdminController{
    async handle(request: Request, response: Response){
        const service = new GetAllAdminService()
        const admins = await service.execute()
        
        console.log('Admin logado: ', request.admin.email)

        return response.json(admins)
    }
}