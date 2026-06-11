
const express = require("express")
const postModel = require("./model/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service.js")
const app = express()
const upload = multer({storage: multer.memoryStorage()});

app.use(express.json())


 // createing a post 
// app.post("/create-post",async(req,res)=>{

//     const data = req.body;


//     const createdpost = await postModel.create({
//         image :data.img,
//         caption:data.caption
//     })

//     res.status(200).json({
//         message:"Post created Successfully",
//         createdpost :createdpost
//     })

// })
// app.get("/feed-post", async (req,res)=>{

//     const feedpost = await postModel.find()


//     res.status(200).json({

//         message:"All feed posts have been fetched successfully",

//         feedpost:feedpost

//     })

// })


app.post("/create-post",upload.single("image"),async(req,res)=>{

    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer)
    console.log(result)

    res.status(200).json({
        messgae:"dones"
    })
})

module.exports = app