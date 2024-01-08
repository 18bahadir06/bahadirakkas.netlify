import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const BoolOnaySchema = new Schema({
    Hakkimda:{
        type:Boolean,
        require:true,
    },
    Yetenekler:{
        type:Boolean,
        require:true,
    },
    Deneyim:{
        type:Boolean,
        require:true,
    },
    Portfolyo:{
        type:Boolean,
        require:true,
    },
    Egitim:{
        type:Boolean,
        require:true,
    },
    Yas:{
        type:Boolean,
        require:true,
    },
    Email:{
        type:Boolean,
        require:true,
    },
    Telefon:{
        type:Boolean,
        require:true,
    },
    Adres:{
        type:Boolean,
        require:true,
    },
    Language:{
        type:Boolean,
        require:true,
    },

});

const BoolOnay=mongoose.model('BoolOnay', BoolOnaySchema);

export default BoolOnay;