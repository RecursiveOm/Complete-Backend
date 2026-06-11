// importing express
const express = require("express")


// importing note model
const noteModel = require("./models/note.model")


// creating app
const app = express()


// middleware
// converts JSON data into JS object
app.use(express.json())





// ================= CREATE =================
// METHOD : POST
// URL : /notes


app.post("/notes", async(req,res)=>{


    // data coming from postman/frontend
    const data = req.body



    // saving data in MongoDB
    const note = await noteModel.create({

        title:data.title,

        content:data.content

    })



    res.status(201).json({

        message:"Note created successfully",

        note:note

    })

})







// ================= READ ALL =================
// METHOD : GET
// URL : /notes


app.get("/notes", async(req,res)=>{



    // fetching all notes from MongoDB

    const notes = await noteModel.find()



    res.status(200).json({

        message:"All notes fetched",

        notes:notes

    })


})







// ================= READ ONE =================
// METHOD : GET
// URL : /notes/:id


app.get("/notes/:id", async(req,res)=>{



    // id coming from URL

    const id = req.params.id



    const note = await noteModel.findById(id)




    if(!note){

        return res.status(404).json({

            message:"Note not found"

        })

    }





    res.status(200).json({

        message:"Note fetched",

        note:note

    })


})








// ================= UPDATE =================
// METHOD : PATCH
// URL : /notes/:id


app.patch("/notes/:id", async(req,res)=>{


    const id = req.params.id



    const updatedNote = await noteModel.findByIdAndUpdate(


        id,


        {

            title:req.body.title,

            content:req.body.content

        },


        {
            // returns updated data
            new:true
        }


    )




    res.status(200).json({

        message:"Note updated successfully",

        note:updatedNote

    })

})









// ================= DELETE =================
// METHOD : DELETE
// URL : /notes/:id


app.delete("/notes/:id", async(req,res)=>{



    const id = req.params.id



    await noteModel.findByIdAndDelete(id)




    res.status(200).json({

        message:"Note deleted successfully"

    })


})




// exporting app
module.exports = app