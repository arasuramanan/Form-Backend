 require('dotenv').config();
const express = require("express");
const db = require('./db/connect');
const cors = require('cors');

//import routes
const detailRoutes = require('./routes/details.routes');
const app = express();

//Connecting DB
db();

app.get('/', function (req, res) {
  res.send("Welcome to my Organization! 🙋‍♂️, 🌏 🎊✨🤩");
});

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/api', detailRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => 
console.log(`The server started in: ${PORT} ✨✨`)

);