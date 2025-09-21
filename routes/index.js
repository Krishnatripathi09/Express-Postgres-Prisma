import { Router } from "express";
import UserRouter from "./UserRoutes.js";

const RouteUser = Router();

RouteUser.use("/api/user", UserRouter);

export default RouteUser;
