import { Router } from "express";
import { CreatePupilController } from "../app/controllers/pupilControllers/CreatePupilController";
import { GetAllPupilsController } from "../app/controllers/pupilControllers/GetAllPupilsController";
import auth from "../middleware/Auth";

const pupilRouter = Router()

pupilRouter.post('/pupils', auth, new CreatePupilController().handle)
pupilRouter.get('/pupils', auth, new GetAllPupilsController().handle)

export default pupilRouter