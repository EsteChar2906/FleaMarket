import Role from '../models/roles.js'

export const createRole =async (req,res)=>{
    try {
    const {name}= req.body
    const newRole = new Role({name})
    await newRole.save()
    res.json(newRole)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    }
export const getAllRoles = async (req,res)=>{
    try {
    const roles = await Role.find()
    res.json(roles)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}