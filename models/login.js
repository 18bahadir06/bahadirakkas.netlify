import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const LoginSchema = new Schema({
    Kullaniciad:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
});

const login=mongoose.model('Login', LoginSchema);

export default login;