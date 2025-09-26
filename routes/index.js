import { Router } from "express";
import UserRouter from "./UserRoutes.js";
import PostRouter from "./PostRoutes.js";

const router = Router();

router.use("/api/user", UserRouter);

router.use("/api/post", PostRouter);

export default router;
