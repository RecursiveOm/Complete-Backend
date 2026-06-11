
const express = require("express")
const postModel = require("./model/post.model")


const app = express()


app.use(express.json())

 
app.post("/createpost",async(req,res)=>{

    const data = req.body;


    const createdpost = await postModel.create({
        image :data.img,
        caption:data.caption
    })

    res.status(200).json({
        message:"Post created Successfully",
        createdpost :createdpost
    })







})


module.exports = app