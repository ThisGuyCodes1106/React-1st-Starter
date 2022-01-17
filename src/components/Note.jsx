import React from 'react';

function Note(props) {
  return (
    <div className='note'>
      <dt>
      <h1>{props.title}</h1>
      </dt>
      <dd>
      <p>{props.content}</p>
      </dd>
    </div>
  )
}

export default Note;