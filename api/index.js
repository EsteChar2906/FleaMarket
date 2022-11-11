import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {connectDB}  from './db.js';
import routerProduct from './src/routes/products.routes.js';
import routerUsers from './src/routes/users.routes.js'
import routerCategory from '../api/src/routes/category.routes.js'


const app = express();
connectDB()
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));


app.use("/api", routerProduct);
app.use("/api", routerUsers);
app.use("/api", routerCategory);

app.listen(3001, () => {
    console.log('% listening at 3001'); 
  });




