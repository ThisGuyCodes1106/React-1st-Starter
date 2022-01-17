import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx"
import notes from "../notes.js"

function createNote(eachNote) {
  return (
    <Note
    key={eachNote.key}
    title={eachNote.title}
    content={eachNote.content} 
  />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  )
}

export default App;