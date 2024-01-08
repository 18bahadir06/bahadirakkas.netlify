import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const PortfolyoSchema = new Schema({
    Resim1:{
        type:String,
        require:true,
    },
    Baslik1:{
        type:String,
        require:true,
    },
    Baslik2:{
        type:String,
    },
    Text:{
        type:String,
    },
    Link:{
        type:String,
        require:true,
    },
    GitLink:{
        type:String,
    },
    Tur:{
        type:String,
        require:true,
    },
    Blog:{
        type:Boolean,
        require:true,
    }
});

const Portfolyo=mongoose.model('Portfolyo', PortfolyoSchema);

export default Portfolyo;