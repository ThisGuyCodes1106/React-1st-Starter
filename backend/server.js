const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const Note = require("./models/note.model")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

//Middleware
app.use(cors())
app.use(express.json())

//Establish DB connection
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
})

const notesRouter = require("./routes/note.route")

app.use("/notes", notesRouter)

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
})