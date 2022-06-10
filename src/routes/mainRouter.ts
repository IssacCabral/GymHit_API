import { Router } from "express";
import adminRouter from "./AdminRoutes";
import authRoute from "./AuthenticationRoute";
import pupilRouter from "./PupilsRoutes";
import instructorRouter from "./InstructorsRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(authRoute)
                    .use(adminRouter)
                    .use(pupilRouter)
                    .use(instructorRouter)