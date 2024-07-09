const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.send("Welcome to Our HOTEL ! , chak de phattee");
});


const menuRoutes = require('./Routes/menuRoutes');

const personRoutes = require('./Routes/personRoutes');


app.use('/menu',menuRoutes);
app.use('/person',personRoutes);

app.listen(3000, () => {
  console.log("server listeing on port 3000");
});
