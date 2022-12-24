const express = require("express");
const bodyParser = require("body-parser");
const mongoParser= require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products",mongoParser.createProduct);

app.get("/products",mongoParser.getProducts );

app.listen(2000,()=>{
    console.log("server running successfullly");
})