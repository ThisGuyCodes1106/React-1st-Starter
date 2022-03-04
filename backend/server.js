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

//Route to get all notes
app.get("/notes", async (req,res) => {
  const notes = await Note.find({})
})

//Route to add a note
app.post("/posts/add", async (req, res) => {
  const newNote = new Note(req.body)

  newNote.save((err, result) => {
    if (!err) {
       delete result._doc.__v
       res.json(result._doc)
    } else {
       res.status(400).json({"error": err})
    }
 })
})


app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
})