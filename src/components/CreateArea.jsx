import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)

  function userType() {
    setExpanded(true)
  }

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setNewNote( prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(newNote)
    setNewNote({title: "", content: ""})
    event.preventDefault() //SO THE FORM DOES NOT REFRESH PAGE
  }

  return (
    <div>
      <form className="create-note">
        { isExpanded ? (
          <input 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          value={newNote.title} 
          />
        ) : null }
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          onClick={userType}
          onChange={handleChange} 
          value={newNote.content} 
          rows={ isExpanded ? "3" : "1" } />
          <Zoom in={ isExpanded ? true : false }>
          <Fab onClick={submitNote}> <AddIcon /> </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

// example how to override  MUI components:
// sx={{position: "absolute", background: "#f5ba13", right: "18px", color: "white"}}