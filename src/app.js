const express = require('express')

const app=express();

app.use(express.json())

app.get("/healthz",(req,res)=>{
    res.json({status:"ok",message:"Server running..."})
})

app.get("/",(req,res)=>{
    res.json("Welcome to server")
})

module.exports=app