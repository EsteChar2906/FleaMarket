// import { v2 as cloudinary } from "cloudinary";
// import {CLOUDINARY_API_KEY,CLOUDINARY_CLOUD_NAME,CLOUDINARY_SECRET} from '../../config.js'


// // configuracion de cloudinary
// cloudinary.config({
//   cloud_name: CLOUDINARY_CLOUD_NAME,
//   api_key: CLOUDINARY_API_KEY,
//   api_secret: CLOUDINARY_SECRET,
//   secure: true
// });

// //funcion para subir imagenes
// //recibe como parametro la ruta donde esta el archivo
// // esta funcion tiene dentro uno metodo de cloudinary q recibe la ruta y el folder a guardar en la plataforma
// export const uploadImage = async (filePath) => {
//   return await cloudinary.uploader.upload(filePath, {
//     folder: "FleaMarket",
//   });
// };

// // elimina un arhcivo por public_id
// export const deleteImage = async (public_id) => {
//   return await cloudinary.uploader.destroy(public_id);
// };