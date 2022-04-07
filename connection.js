const mongoose = require("mongoose");

const DB = process.env.DATABASE;


// Coneect to database
mongoose.connect(DB,{
}).then(()=>{
    console.log("Conection sucessful");
}).catch((err) => 
    console.log(err)
) 