import { Router } from "express";
import { CreatePupilController } from "../app/controllers/pupilControllers/CreatePupilController";
import auth from "../middleware/Auth";

const pupilRouter = Router()

pupilRouter.post('/pupils', auth, new CreatePupilController().handle)

export default pupilRouter