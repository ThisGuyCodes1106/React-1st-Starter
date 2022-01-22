import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}> <AddTaskIcon /> </button> 
    </div>
  )
}

export default Note;