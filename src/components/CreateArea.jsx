import React, {useState} from "react";

function CreateArea(props) {

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
      <form>
        <input 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          value={newNote.title} 
          />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          onChange={handleChange} 
          value={newNote.content} 
          rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;