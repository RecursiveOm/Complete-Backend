// Entry point of backend

const app = require("./src/app")
const connectdb = require("./src/db/db")


// first connect database
connectdb()


// start express server
app.listen(3000,()=>{

    console.log("Server Started")

})