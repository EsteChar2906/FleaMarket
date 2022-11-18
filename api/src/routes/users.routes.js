import express from "express";
import {
  // createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.controllers.js";
import {verifyAdminRole, verifyToken}  from "../middleware/auth.middlewares.js";

const router = express();

// route que me trae todo los usuarios
router.get("/users", [verifyToken, verifyAdminRole], getUsers);

// route que me actualiza los datos de usuarios
router.put("/users/:id", verifyToken, updateUser);

//ruta que elimina un usuario
router.delete("/users/:id", [verifyToken, verifyAdminRole], deleteUser);

export default router;
