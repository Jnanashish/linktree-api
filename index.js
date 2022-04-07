const express = require("express");
// const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

// import the Routes 
const linkRoutes = require("./routes/links")
const daimgRoutes = require("./routes/daimg")

const app = express();
app.use(fileUpload({
    useTempFiles:true
}))
app.use(express.json());

require('dotenv').config();


// connect with database
require("./connection")


app.use("/api", linkRoutes);
app.use("/api", daimgRoutes);


// step for heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT)