import express from "express";

import { findOrCreate, PushProduct, deleteProduct } from "../controllers/shopingCar.controllers.js";

//Aquí los controladores

const router = express();

// ruta que verifica si existe o no un archivo de carrito para un usuario
// si no existe se crea
router.use("/car/:userId", findOrCreate);

// ruta para agregar productos al shoping car
// req.params trae el id del usuario "userID"
// req.body trae el id del producto en "productId"
router.put("/car/:userId", PushProduct);

// ruta para agregar productos al shoping car
// req.params trae el id del usuario "userID"
// req.body trae el id del producto en "productId"
router.delete("/car/:userId", deleteProduct)

export default router;