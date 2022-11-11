import express from "express";
import Users from '../models/users.js'

const router = express();

// route me crea un usuario
router.post("/users", async (req, res) => {
    try {
        const newUser = Users(req.body);
        await newUser.save()
        return res.json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// route que me trae todo los usuarios
router.get("/users", async (req, res) => {
    try {
            const users = await Users.find();
            return res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

// route que me actualiza los usuarios
router.put("/users/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { firstname, lastname, password, email, country, city, addres, telephone, roles } = req.body;
        await Users.updateOne({_id: id}, {$set: req.body})
        res.status(200).send('Se actualizaron los datos correctamente')
    }catch(error){
        res.status(500).send({error: error.message})
    }
});

router.delete("/users/:id", async (req, res) => {
    try{
        const { id } = req.params;
        await Users.deleteOne({_id: id})
        res.status(200).send("El usuario a sido eliminado correctamente")
    }catch(error){
         res.status(500).send({error: error.message});
    }
});


export default router;

