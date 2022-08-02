const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GET","POST"]
    })
)

app.listen(8000)

app.get("/",(req,res) => {
    console.log("Got here!")
    res.send("Hello")
})

const chargerRouter = require("./routes/chargers")

app.use("/chargers",chargerRouter)