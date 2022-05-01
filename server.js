const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname,"client","build")))

app.listen(80, ()=>{
    console.log("SERVER ON PORT 80")
})