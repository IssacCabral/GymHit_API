import { Router } from "express";
import { CreateAdminController } from "../app/controllers/adminControllers/CreateAdminController";

const adminRouter = Router()

adminRouter.post('/admin', new CreateAdminController().handle)

export default adminRouter