require('dotenv').config();
const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_URL)
        console.log('Connected to Db')
    } catch(err){
        console.error("Database connection error ",err);

    }
}

module.exports =connectDB