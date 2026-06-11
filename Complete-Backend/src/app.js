// importing express framework
const express = require("express")

// creating express application
const app = express()


// middleware
// converts incoming JSON data into JS object
// without this req.body will be undefined
app.use(express.json())


// temporary database (array)
// later MongoDB will replace this
const notes = []



// ================= CREATE =================
// METHOD : POST
// PURPOSE : Add new note
// URL : /notes

app.post("/notes",(req,res)=>{

    // getting data sent by client(Postman/frontend)
    const data = req.body


    // adding data into our array database
    notes.push(data)


    // sending response back
    res.status(201).json({

        message:"Note created successfully",
        note:data

    })

})




// ================= READ ALL =================
// METHOD : GET
// PURPOSE : Fetch all notes
// URL : /notes


app.get("/notes",(req,res)=>{


    res.status(200).json({

        message:"All notes fetched successfully",

        // sending complete notes array
        notes:notes

    })


})




// ================= READ SINGLE =================
// METHOD : GET
// PURPOSE : Get one note using index
// URL : /notes/0


app.get("/notes/:index",(req,res)=>{


    // params come from URL
    const index = req.params.index


    // checking note exists or not
    if(!notes[index]){

        return res.status(404).json({

            message:"Note not found"

        })
    }


    res.status(200).json({

        message:"Note fetched successfully",
        note:notes[index]

    })

})




// ================= UPDATE =================
// METHOD : PATCH
// PURPOSE : Update existing note
// URL : /notes/update/0


app.patch("/notes/update/:index",(req,res)=>{


    const index = req.params.index


    // new updated content from body
    const content = req.body.content
    const title = req.body.title



    // check index exists
    if(!notes[index]){

        // return stops further execution
        return res.status(404).json({

            message:"Note not found"

        })
    }



    // updating only content
    notes[title].title=title;
    notes[index].content = content



    res.status(200).json({

        message:`Note updated successfully at index ${index}`,
        note:notes[index]

    })


})




// ================= DELETE =================
// METHOD : DELETE
// PURPOSE : Delete note
// URL : /notes/0


app.delete("/notes/:index",(req,res)=>{


    const index = req.params.index



    if(!notes[index]){

        return res.status(404).json({

            message:"Note not found"

        })

    }



    // delete removes value but leaves empty space
    // delete notes[index]


    // splice actually removes from array
    notes.splice(index,1)



    res.status(200).json({

        message:`Note deleted successfully at index ${index}`

    })


})




// exporting app to server.js
module.exports = app