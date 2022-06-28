import { Pupil } from "../../entities/Pupil";
import dataSource from "../../../database/data-source";

export class GetAllPupilsService{
    async execute(admin_id: string, page: number, pattern?: string){

        const limit = 5;
        const pupilRepository = dataSource.getRepository(Pupil)

        const pupils = await pupilRepository.createQueryBuilder('pupil')
            .where('pupil.admin_id = :admin_id', { admin_id })
            .andWhere(pattern 
                ? `
                    ( pupil.name ILIKE :pattern OR
                    pupil.cpf  ILIKE :pattern )
                ` 
                : '1=1', {
                    pattern: `%${pattern}%`
                }
            )
            .take(limit)
            .skip((page - 1) * limit)
            .getMany();

    

        const totalCounts = await pupilRepository.count({
            where: { admin_id }
        });
        
        return { pupils, totalCounts }
    }
}