import Category from '../models/category.js'

export const createCategory = async (req, res) => {
    try {
        const newCategory = Category(req.body);
        await newCategory.save()
        return res.json(newCategory);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}  

export const deleteCategory = async (req, res) => {
    try {
        let { id } = req.params
        await Category.deleteOne({ _id: id })
        res.status(200).send("categoria eliminada!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}