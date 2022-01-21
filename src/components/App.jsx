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
  console.log(notes);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
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

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/