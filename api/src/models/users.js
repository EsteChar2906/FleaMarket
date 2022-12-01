import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    addres: {
      type: String,
    },
    telephone: {
      type: Number,
    },
    active:{
      type: Boolean,
      default: true
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
  },
  {
    timestamps: true, //evita o permite los atributos de tiempos.
    versionKey: false, // evita que en la db salga _V, la version.
  }
);

userSchema.statics.encryptPassword = async (password) => { // funcion que encripta el pasword pasado por el user 
  const salt = await bcrypt.genSalt(10); // aplicar un numero de algoritmos 
  return await bcrypt.hash(password, salt); // a la contrasena que me llega le aplico un hash pasandole el password y el salt
};

userSchema.statics.comparePassword = async (password, receivedPassword) => { // funcion que me compara los password 
  return await bcrypt.compare(password, receivedPassword) // recibe el password viejo y el nuevo, si los password coinciden retorna true sino retorna un false 
}


export default mongoose.model("Users", userSchema);
