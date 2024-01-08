import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const MesajSchema = new Schema({
    Isim:{
        type:String,
        require:true,
    },
    Baslik:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Mesaj:{
        type:String,
        require:true,
    },
    Tarih:{
        type:String,
        require:true,
    },
    Date:{
        type:Date,
        default:Date.now,
        require:true,
    },
});

const Mesaj=mongoose.model('Mesaj', MesajSchema);

export default Mesaj;