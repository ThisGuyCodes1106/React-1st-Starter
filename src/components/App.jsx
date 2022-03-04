import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx"
import CreateArea from "./CreateArea"

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/notes/")
      .then(res => {
        setNotes(res.data)
      })
    })

  function deleteNote(id) {
    axios.delete(`http://localhost:5000/notes/${id}`)
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      }) //return all notes where index not equal to id
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div>
        {notes.map((note, index) => (
          <Note
          key={index}
          _id={note._id}
          title={note.title}
          content={note.content} 
          onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App;