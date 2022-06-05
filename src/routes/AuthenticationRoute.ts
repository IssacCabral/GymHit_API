import { Router } from "express";
import Token from "../auth/Token";

const authRoute = Router()

authRoute.post('/auth', Token.authenticate)

export default authRoute
