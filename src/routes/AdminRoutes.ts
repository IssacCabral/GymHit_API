import { Router } from "express";
import { CreateAdminController } from "../app/controllers/adminControllers/CreateAdminController";
import { GetAllAdminController } from "../app/controllers/adminControllers/GetAllAdminController";
import auth from "../middleware/Auth";

const adminRouter = Router()

adminRouter.post('/admin', new CreateAdminController().handle)
adminRouter.get('/admins', new GetAllAdminController().handle)

export default adminRouter