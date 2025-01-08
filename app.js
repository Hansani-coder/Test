// 0gNqR8AVeRo7vIv9 = pw

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRouters");

const app = express();


// Middleware
app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://admin:0gNqR8AVeRo7vIv9@hansani.8frmo.mongodb.net/")
.then(() =>{  console.log("Connected to MongoDB")})
.then(() =>{
    app.listen(3000);
})
.catch((err) =>{ 
    console.log(("Database connection error:",err))});
