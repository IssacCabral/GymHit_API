import { Admin } from "../../entities/Admin";
import dataSource from "../../../database/data-source";

export class GetAllAdminService{
    async execute(){
        const adminRepository = dataSource.getRepository(Admin)
        const admins = await adminRepository.find()

        return admins
    }   
}