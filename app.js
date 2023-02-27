require("dotenv").config()
const express = require("express")
const cors = require("cors")
require("./config/databseConfig")()
const app = express()

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT, () => console.log("Listening on PORT", process.env.PORT))