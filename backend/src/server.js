const express = require("express")
const app = express()
app.listen(8000)

app.get("/",(req,res) => {
    console.log("Got here!")
    res.send("Hello")
})

const chargerRouter = require("./routes/chargers")

app.use("/chargers",chargerRouter)