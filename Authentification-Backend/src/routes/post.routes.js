const express = require("express")

const router = express.Router();

router.post("/create", (req,res)=>{
    

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorised"
        })
    }
    res.send("Post created successfully")
})


module.exports = router;