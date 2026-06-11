
const express = require("express")
const postModel = require("./model/post.model")


const app = express()


app.use(express.json())

 // createing a post 
app.post("/create-post",async(req,res)=>{

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
app.get("/feed-post", async (req,res)=>{

    const feedpost = await postModel.find()


    res.status(200).json({

        message:"All feed posts have been fetched successfully",

        feedpost:feedpost

    })

})


module.exports = app