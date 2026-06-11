const express = require("express")
const noteModel = require("./models/node.model.js")
const app = express();


app.use(express.json());
app.post("/notes",async(req,res)=>{
    const data = req.body
    await noteModel.create({
        title:data.title,
        content:data.content
    })

    res.status(201).json({
        message:"Note created"
    })
})


app.get("/notes",async (req,res)=>{

    const notes = await noteModel.find({
        title:"omkar zunje"
    });
    
    res.status(200).json({
        message:"Note fetched secussfylly",
        notes:notes

    })

})
module.exports = app;
