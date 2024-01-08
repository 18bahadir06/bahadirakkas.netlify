import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const EgitimSchema = new Schema({
    OkulAd:{
        type:String,
        require:true,
    },
    Derece:{
        type:String,
        require:true,
    },
    Bolum:{
        type:String,
        require:true,
    },
    Text:{
        type:String,
        require:true,
    },
    Time:{
        type:String,
        require:true,
    },
});

const Egitim=mongoose.model('Egitim', EgitimSchema);

export default Egitim;