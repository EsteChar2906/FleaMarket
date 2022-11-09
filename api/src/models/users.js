import mongoose from 'mongosee';
const { Schema } = mongoose;

const schema = new Schema({
    fistname:{
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    lastname:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    roles: [String],
    email:{
        type: String,
    },
    typeDocument: {
        type: String,
        required: true
    },
    numDocument: {
        type: Number,
        required: true,
        unique: true
    },
    telephone:{
        type: Number
    }
});

const Users = mongoose.model('Users', schema)

export default Users;