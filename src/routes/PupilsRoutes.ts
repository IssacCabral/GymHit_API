import { Router } from "express";
import { CreatePupilController } from "../app/controllers/pupilControllers/CreatePupilController";
import { GetAllPupilsController } from "../app/controllers/pupilControllers/GetAllPupilsController";
import { UpdatePupilController } from "../app/controllers/pupilControllers/UpdatePupilController";
import { DeletePupilController } from "../app/controllers/pupilControllers/DeletePupilController";
import auth from "../middleware/Auth";

const pupilRouter = Router()

pupilRouter.post('/pupils', auth, new CreatePupilController().handle)
pupilRouter.get('/pupils', auth, new GetAllPupilsController().handle)
pupilRouter.put('/pupils/:id', auth, new UpdatePupilController().handle)
pupilRouter.delete('/pupils/:id', auth, new DeletePupilController().handle)

export default pupilRouter