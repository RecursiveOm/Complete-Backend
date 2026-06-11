// importing mongoose
const mongoose = require("mongoose")


// function for database connection
async function connectdb(){


    await mongoose.connect(
        "mongodb+srv://zero:strangehitler%402006@cluster0.3v33nan.mongodb.net/Echofeed-Backend"
        
    )


    console.log("Connected to DB")

}


// exporting function
module.exports = connectdb