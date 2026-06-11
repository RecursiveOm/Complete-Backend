
const express = require("express")
const postModel = require("./model/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service.js")
const app = express()
const upload = multer({storage: multer.memoryStorage()});
const cors = require('cors')



app.use(express.json())
app.use(cors())



app.post("/create-post",upload.single("image"),async(req,res)=>{

    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption:req.body.caption 
    })

    res.status(200).json({
        messgae:"post createed successfully",
        post
    })
})

app.get("/posts", async(req,res)=>{
    const posts = await postModel.find()


    return res.status(200).json({
        message:"post has been fetched successfully",
        posts
    })

})

module.exports = app