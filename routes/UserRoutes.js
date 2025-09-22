import {
  createUser,
  fetchUsers,
  updateUser,
} from "../controller/UserController.js";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/", createUser);
UserRouter.patch("/:id", updateUser);
UserRouter.get("/", fetchUsers);

export default UserRouter;
