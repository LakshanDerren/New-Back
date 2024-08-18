import mongoose from "mongoose";   

const msgschema = mongoose.Schema({
    msg:{
        type:String,
        required:true
    }
})
export const msgMod = mongoose.model("msgMod",msgschema)

