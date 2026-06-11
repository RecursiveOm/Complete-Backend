// importing mongoose
const mongoose = require("mongoose")



// creating schema
// schema defines structure of document

const noteSchema = new mongoose.Schema({


    title:String,


    content:String


})




// creating model
// model talks with mongodb collection

const noteModel = mongoose.model(
    "note",
    noteSchema
)



// exporting model

module.exports = noteModel