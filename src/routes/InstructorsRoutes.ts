import { Router } from "express";
import { CreateInstructorController } from "../app/controllers/instructorControllers/CreateInstructorController";
import { GetAllInstructorsController } from "../app/controllers/instructorControllers/GetAllInstructorsController";
import { UpdateInstructorController } from "../app/controllers/instructorControllers/UpdateInstructorController";
import { DeleteInstructorController } from "../app/controllers/instructorControllers/DeleteInstructorController";
import auth from "../middleware/Auth";

const instructorRouter = Router()

instructorRouter.post('/instructors', auth, new CreateInstructorController().handle)
instructorRouter.get('/instructors', auth, new GetAllInstructorsController().handle)
instructorRouter.put('/instructors/:id', auth, new UpdateInstructorController().handle)
instructorRouter.delete('/instructors/:id', auth, new DeleteInstructorController().handle)

export default instructorRouter