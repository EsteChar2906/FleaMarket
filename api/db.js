import mongoose from 'mongoose'
import { MONGO_ATLAS_URI } from './config.js'

export const connectDB = async () =>{
   try {
    const db = await mongoose.connect(MONGO_ATLAS_URI)
    console.log('conectado a la db:', db.connection.name)
   } catch (error) {
    console.log(` Error: ${error}`)
   }
}

