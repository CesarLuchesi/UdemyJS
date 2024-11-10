import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequerid from "../middlewares/loginRequired";

const router = new Router();

// router.get("/", userController.index);
// router.get("/:id", userController.show);

router.post("/", loginRequerid, userController.store);
router.put("/", loginRequerid, userController.update);
router.delete("/", loginRequerid, userController.delete);

export default router;
