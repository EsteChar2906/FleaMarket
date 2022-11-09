import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {connectDB}  from './db.js';
import routerProduct from './src/routes/products.js';

const app = express();
connectDB()
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use("/api", routerProduct);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3001, () => {
    console.log('% listening at 3001'); 
  });




