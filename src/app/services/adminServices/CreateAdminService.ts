import { Admin } from "../../entities/Admin";
import dataSource from "../../../database/data-source";
import bcrypt from 'bcrypt'

interface AdminRequest{
    email: string
    password: string
}

export class CreateAdminService{
    async execute({email, password}: AdminRequest): Promise<Admin | Error>{
        const adminRepository = dataSource.getRepository(Admin)

        const adminExists = await adminRepository.findOne({where: {email}})
        
        if(adminExists) return new Error('admin already exists')

        // password hash
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const admin = adminRepository.create({
            email,
            password: hash
        })

        await adminRepository.save(admin)

        return admin
    }
}