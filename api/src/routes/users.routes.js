import express from "express";
import verifyToken from "../../auth/verifyToken.js";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.controllers.js";

const router = express();

// ruta que crea un usuario
router.post("/users", createUser);

// route que me trae todo los usuarios
router.get("/users", verifyToken, getUsers);

// route que me actualiza los datos de usuarios
router.put("/users/:id", verifyToken, updateUser);

//ruta que elimina un usuario
router.delete("/users/:id", verifyToken, deleteUser);

export default router;
