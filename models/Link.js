import { Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema} =mongoose;

const LinklerSchema = new Schema({
    LinkAd:{
        type:String,
        require:true,
    },
    link:{
        type:String,
        require:true,
    },
    
    linkIcon:{
        type:String,
    },
});

const Link=mongoose.model('Link', LinklerSchema);

export default Link;