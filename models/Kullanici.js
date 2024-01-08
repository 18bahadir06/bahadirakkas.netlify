import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const KullaniciSchema = new Schema({
    AdSoyad:{
        type:String,
        require:true,
    },
    Foto:{
        type:String,
        require:true,
    },
    Unvan:{
        type:String,
        require:true,
    },
    Yas:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Telefon:{
        type:String,
        require:true,
    },
    Adres:{
        type:String,
        require:true,
    },
    Hakkimda:{
        type:String,
        require:true,
    },
    Cv:{
        type:String,
        require:true,
    },
    Language:{
        type:String,
        require:true,
    },
});

const Kullanici=mongoose.model('Kullanici', KullaniciSchema);

export default Kullanici;