import express from "express";
import { userRegister, userLogin } from "../controllers/auth.controllers.js";
import { verifyDuplicateUser, verifyExitedRole } from "../middleware/validation.middleware.js";
const router = express();

// ruta de de registro de usuario
router.post("/register", [verifyDuplicateUser, verifyExitedRole], userRegister);

// ruta de autenticacion o login
router.post("/login", userLogin);

export default router;
