import Users from "../models/users.js";
import Role from "../models/roles.js";

//verifica si el firstname o el lastname y el email estan repetidos
export const verifyDuplicateUser = async (req, res, next) => {
  try {
    const userName = await Users.findOne({ username: req.body.username });
    
    if (userName)
      return res
        .status(400)
        .json({ message: "Username already exist" });

    const email = await Users.findOne({ email: req.body.email, active: true });
    if (email) return res.status(400).json({ message: "El email ya existe" });

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// verifica si los roles insertados existen
export const verifyExitedRole = async (req, res, next) => {
  const roles = await Role.find();
  const rolesName = roles.map((r) => r.name);

  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!rolesName.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} no existe`,
        });
      }
    }
  }
  next();
};
