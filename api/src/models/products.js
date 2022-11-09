import mongoose from 'mongosee';
const { Schema } = mongoose;

const schema = new Schema(
    {
        name: {
            type: String,
            requerid: [true, 'name is required']
            // unique: true no se si colocar que el nombre sea unico
        },
        category: {
            type: String,
            requerid: true
        },
        stock: {
            type: Number,
            requerid: true,
            min: [1, 'At least one product is needed to publish it']
        },
        description: {
            type: String,
            maxlength: 500
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: Buffer,
            required: true
        },
        condition: {
            type: String,
            enum: ['Nuevo', 'Usado']

        }
    },
    {
        query: {
            byName(name){
                return this.where({ name: new RegExp(name, 'i')});
            }
        }
    }
)

const Products = mongoose.model('Products', schema)

export default Products;