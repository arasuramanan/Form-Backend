const express = require('express');
const collection = require('../models/user');

const router = express.Router();


router.post("/", async(req, res)=>{
    const{email, password}=req.body
    const data={
        email: email,
        password: password
    };
  
    try{
        const check=await collection.findOne({email:email});
  
        if(check){
            res.json("exist");
        }
        else{
            await collection.insertMany([data]);
            res.json("notexist");
        }
  
    }
    catch(e){
        res.json("fail");
    }
  
  })
  
  
  
  router.post("/signup",async(req, res)=>{
    const{email, password} = req.body;
  
    const data={
        email: email,
        password: password
    };
  
    try{
        const check = await collection.findOne({email: email});
  
        if(check){
            res.json("exist");
        }
        else {
            await collection.insertMany([data]);
            res.json("notexist");
        }
  
    }
    catch(e){
        res.json("fail");
    }
  
  });


  module.exports = router;