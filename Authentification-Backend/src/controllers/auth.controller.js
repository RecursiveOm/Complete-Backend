const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

async function registeruser(req,res){
    const{username, email,password} =req.body;


    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token) //token saved in cookie by the name of cookie 


    res.status(201).json({
        message:"User createed secussfully",
        user,
        token
    })
}



module.exports={registeruser}