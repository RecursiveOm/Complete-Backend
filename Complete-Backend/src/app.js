const express = require("express")

const app = express()

app.use(express.json()) 
const notes =[]
app.post('/notes',(req,res)=>{
          
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })
})


app.get('/notes',(req,res)=>{
    
    res.status(200).json({
    message:"all the notes have been fetched succesfully",
    notes: notes
    })
})




app.patch("/notes/update/:index",(req,res)=>{
    const index= req.params.index
    const content= req.body.content
    if(!notes[index]){
        res.status(400).json({
            message:"note not found"
        })
    }

    notes[index].content = content
    res.status(200).json({
        message:`"note has been secusefully updated at index ${index}"`

    })
})




app.delete('/notes/:index',(req,res)=>{

    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:`"Note has been deleted successfully of index ${index}"`
    })
})
module.exports = app