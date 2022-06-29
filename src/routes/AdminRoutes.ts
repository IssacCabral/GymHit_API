import { Router } from "express";
import { CreateAdminController } from "../app/controllers/adminControllers/CreateAdminController";
import { GetAllAdminController } from "../app/controllers/adminControllers/GetAllAdminController";

const adminRouter = Router()

adminRouter.post('/admins', new CreateAdminController().handle)
adminRouter.get('/admins', new GetAllAdminController().handle)

export default adminRouter