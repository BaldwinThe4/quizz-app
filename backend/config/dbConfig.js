const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sanchit:Ah8ruDxQrjeuRTLw@cluster0.rjhfgn5.mongodb.net/")

const connectionDb = mongoose.connection

connectionDb.on('error',(error)=>{
    console.log(error);
})

connectionDb.on('connected',()=>{
    console.log("Connected to Database successfully.")
})

module.exports = connectionDb