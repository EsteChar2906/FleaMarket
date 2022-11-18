import express from "express";
import { createRole, getAllRoles } from "../controllers/roles.controllers.js";
import { verifyToken, verifyAdminRole } from "../middleware/auth.middlewares.js";

const router = express();

// ruta que crea un nuevo role
router.post("/createRole",  [verifyToken, verifyAdminRole], createRole );

//ruta que obtiene todos los roles 
router.get('/role', getAllRoles)

export default router;