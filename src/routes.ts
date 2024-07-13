import { Router } from "express";
import { routes as userRoutes } from "./modules/user/interface/controllers/routes";

const router = Router();

router.use("/user", userRoutes);

export { router };