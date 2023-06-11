require('dotenv').config();
const express = require("express");
const db = require('./db/connect');
const cors = require('cors');

//import routes
const app = express();
const detailRoutes = require('./routes/detailsRoutes');
const userRoutes = require('./routes/userRoutes');


//Connecting DB
db();

//Middlewares
app.use(cors());
app.use(express.json());




app.get('/', function (req, res) {
  res.send("Welcome to my Organization! 🙋‍♂️, 🌏 🎊✨🤩");
});




app.use('/api', detailRoutes);
app.use('/register', userRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => 
console.log(`The server started in: ${PORT} ✨✨`)

);