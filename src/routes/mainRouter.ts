import { Router } from "express";
import adminRouter from "./AdminRoutes";
import authRoute from "./AuthenticationRoute";
import pupilRouter from "./PupilsRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(authRoute)
                    .use(adminRouter)
                    .use(pupilRouter)