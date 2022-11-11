import express from "express";
import Users from '../models/users.js'

const router = express();

// route me crea un usuario
router.post("/user", async (req, res) => {
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


export default router;

