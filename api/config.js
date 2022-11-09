import dotenv from 'dotenv'
dotenv.config()

export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI || 'mongodb+srv://josedld7:flea-app@cluster0.lbpuk0j.mongodb.net/FleaMarketdb?retryWrites=true&w=majority' 