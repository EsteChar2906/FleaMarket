import Users from '../models/users.js'

export const getUsers = async (req, res) => {
    try {
      const users = await Users.find().populate("roles");
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

// export const createUser = async (req, res) => {
//     try {
//       const newUser = Users(req.body);
//       await newUser.save();
//       return res.json(newUser);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }


export const getUserByid = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await Users.findById(id)
  
    if (found) {
      return res.json(found);
    } else {
      return res.status(500).send("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      await Users.updateOne({ _id: id }, { $set: req.body });
      res.status(200).send("Se actualizaron los datos correctamente");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

export const deleteUser =  async (req, res) => {
    try {
      const { id } = req.params;
      await Users.deleteOne({ _id: id });
      res.status(200).send("El usuario a sido eliminado correctamente");
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }