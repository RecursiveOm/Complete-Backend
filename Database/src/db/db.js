const mongoose= require("mongoose")

async function connectdb(){
    await mongoose.connect("mongodb+srv://zero:strangehitler%402006@cluster0.3v33nan.mongodb.net/arken")
    console.log("Connected to DB");

}

module.exports =connectdb;