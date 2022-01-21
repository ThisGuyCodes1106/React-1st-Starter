import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx"
import CreateArea from "./CreateArea"

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes([...notes, newNote])
  }

  function deleteNote(id) {
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
          id={index}
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