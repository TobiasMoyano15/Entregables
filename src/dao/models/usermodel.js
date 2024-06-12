import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection = 'users';

const userSchema = new Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'], // Corregido 'emum' a 'enum'
        default: 'user'
    }
});

userSchema.plugin(mongoosePaginate);

// Define y exporta el modelo de usuario correctamente
const UserModel = model(userCollection, userSchema);
export default UserModel;
