import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
import Users from "../models/users.js";
import Role from "../models/roles.js";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No se ha proveido un token de acceso" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id; // si hay token, de el extraigo el id del usuario

    const user = await Users.findById(req.userId, { password: 0, active: true });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" }); // si no hay user...

    next(); // si hay...
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};

export const verifyAdminRole = async (req, res, next) => {
    try {
      const user = await Users.findById(req.userId); // busca el user 
      const roles = await Role.find({ _id: { $in: user.roles } }); //busca el role q coincide con el user 
  
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      return res.status(403).json({ message: "Se requiere el role de administrador" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error });
    }
  };