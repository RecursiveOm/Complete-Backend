// importing mongoose
const mongoose = require("mongoose")
require("dotenv").config();

// function for database connection
async function connectdb(){


    await mongoose.connect(
        process.env.MONGODB_CONNECT_URL
        
    )


    console.log("Connected to DB")

}


// exporting function
module.exports = connectdb