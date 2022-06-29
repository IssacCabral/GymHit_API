import { Admin } from "../../entities/Admin";
import dataSource from "../../../database/data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

interface AdminRequest{
    email: string
    password: string,
    telephone: string;
    coorporate_name: string;
    fantasy_name: string;
    city: string;
    cnpj: string;
    state: string;
    number: string;
    street: string;
    district: string;
}

export class CreateAdminService{
    async execute(data: AdminRequest): Promise<Admin | Error>{
        const adminRepository = dataSource.getRepository(Admin)

        const adminExists = await adminRepository.findOne({where: {email: data.email}})
        
        if(adminExists) return new Error('admin already exists')

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password, salt)

        const admin = adminRepository.create({...data, password: hash} as any)

        const adminSaved = await adminRepository.save(admin) as any;

        const token = jwt.sign({ admin_id: adminSaved.id, email: adminSaved.email }, process.env.SECRET_JWT_KEY, {expiresIn: '1hr'})

        admin['accessToken'] = token as any;

        return admin
    }
}