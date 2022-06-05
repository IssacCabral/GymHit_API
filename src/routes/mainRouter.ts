import { Router } from "express";
import adminRouter from "./AdminRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(adminRouter)