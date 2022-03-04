const express = require("express")
const router = express.Router()

const Note = require("../models/note.model")


//Route to get all notes
router.get("/", async (req,res) => {
  const notes = await Note.find({})
})