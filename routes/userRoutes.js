const express = require('express');
const collection = require('../models/user');

const router = express.Router();


router.post("/login", async(req, res)=>{
    const{email, password} = req.body;

    try{
        const check = await collection.findOne({email:email});
  
        if(!check){
            res.json("User Not Register");
        }
        else{
            res.json(check.email);
        }
  
    }
    catch(e){
        res.json("fail");
    }
  
  })
  
  
  
  router.post("/signup",async(req, res)=>{
    const{email, password} = req.body;
  

  
    try{
        const check = await collection.findOne({email: email});
  
        if(check){
            res.json("exist");
        }
        else {
           const data = await collection.create({email, password});
            res.json(data);
        }
  
    }
    catch(e){
        res.json("fail");
    }
  
  });


  module.exports = router;