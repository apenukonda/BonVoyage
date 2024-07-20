const fs=require("node:fs");
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=3001;
const user1=require("./mini.js");

app.use(express.urlencoded({extened:true}));
mongoose.connect("mongodb://127.0.0.1:27017/UserDataDB").then(()=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
    console.log("DAtabase cant be connected\n");
})
app.get("/",(req,res)=>{
    let a=fs.readFileSync("credentials.html");
    res.send(a.toString());
})
app.post("/",async(req,res)=>{
    const userData=new user1(req.body);
    await userData.save();
    let a=fs.readFileSync("submit.html");
    res.send(a.toString());

})

app.listen(port,()=>{
    console.log("APP RUNNING ON PORT",port);
})
