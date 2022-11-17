import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {connectDB}  from './db.js';
import routerProduct from './src/routes/products.routes.js';
import routerUsers from './src/routes/users.routes.js'
import routerCategory from './src/routes/category.routes.js'
import verifyToken from './src/auth/verifyToken.js';
import {PORT} from './config.js'
import axios from 'axios'
import verifyRole from './src/auth/verifyRole.js';

const app = express();

connectDB()
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));


app.use("/api", routerProduct);
app.use("/api", routerUsers);
app.use("/api", routerCategory);


// ruta de prueba
app.get("/api/getToken",  verifyToken, verifyRole, async (req, res) => {
 const token = req.headers.authorization.split(' ')[1]
 const response = await axios.get('https://dev-xflh1nhmiqkhpil1.us.auth0.com/userinfo',{
  headers:{
    authorization: `Bearer ${token}`
  }
 })
const userinfo = response.data
console.log(userinfo)
res.send(userinfo)
 });


//  app.get("/api/verifyRole",  verifyToken, verifyRole, async (req, res) => {
//  res.send('role verificado')
//   });
 
// 404
app.use((re,res,next)=>{
  const error = new Error('No found')
  error.status = 404;
  next(error)
})

// msnejo de errores 
app.use((error, req,res,next)=>{
  const status = error.status || 500
  const message = error.message || 'internal server'
  res.status(status).send(message)
})

app.listen(PORT, () => {
    console.log(`% listening at ${PORT}`); 
  });




