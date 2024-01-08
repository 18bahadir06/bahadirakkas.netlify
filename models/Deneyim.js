import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const DeneyimSchema = new Schema({
    Isletme:{
        type:String,
        require:true,
    },
    Unvan:{
        type:String,
        require:true,
    },
    Time:{
        type:String,
        require:true,
    },
    Text:{
        type:String,
        require:true,
    },
});

const Deneyim=mongoose.model('Deneyim', DeneyimSchema);

export default Deneyim;