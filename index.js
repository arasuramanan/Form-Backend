require('dotenv').config();
const express = require("express");
const collection = require('../backend/models/user.model');
const db = require('./db/connect');
const cors = require('cors');

//import routes
const detailRoutes = require('./routes/details.routes');
const app = express();

//Connecting DB
db();

//Middlewares
app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
  res.send("Welcome to my Organization! 🙋‍♂️, 🌏 🎊✨🤩");
});

app.post("/",async(req,res)=>{
  const{email,password}=req.body

  try{
      const check=await collection.findOne({email:email});

      if(check){
          res.json("exist");
      }
      else{
          res.json("notexist");
      }

  }
  catch(e){
      res.json("fail");
  }

})



app.post("/signup",async(req, res)=>{
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


app.use('/api', detailRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => 
console.log(`The server started in: ${PORT} ✨✨`)

);