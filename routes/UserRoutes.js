import { createUser, updateUser } from "../controller/UserController.js";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/", createUser);
UserRouter.patch("/:id", updateUser);

export default UserRouter;
