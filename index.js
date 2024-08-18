import express from "express"                     
const app = express()
import cors from "cors"
import  {msgMod}  from "./models/msgMod.js"
import mongoose from "mongoose"
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://lynnlakshan:Lakshan$12@isuru.ntezn.mongodb.net/").then(()=>{
    app.listen(3000,()=>console.log("server worked"))
})
.catch((err)=>{
    console.log(err.message,"err has ocered");
    
})
app.post('/post', async (req,res)=>{
    try{
        const getMsg = await msgMod.create(req.body)
        res.status(200).json(getMsg)
    }
    catch(err){
        res.status(500).json("post not work")
    }
})

app.get('/get', async (req,res)=>{
    try{
        const getMsg = await msgMod.find()
        res.status(200).json(getMsg)
    }
    catch(err){
        res.status(500).json("get not work")
    }
})