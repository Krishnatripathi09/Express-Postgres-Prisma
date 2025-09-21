import { createUser } from "../controller/UserController.js";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/", createUser);

export default UserRouter;
