import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const YeteneklerSchema = new Schema({
    YetenekAd:{
        type:String,
        require:true,
    },
    YetenekDeger:{
        type:Number,
        require:true,
    },
});

const Yetenekler=mongoose.model('Yetenekler', YeteneklerSchema);

export default Yetenekler;