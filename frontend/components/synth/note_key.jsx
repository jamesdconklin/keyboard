import React from 'react';

const NoteKey = ({note, pressed}) => {
  let divClass = pressed ? "note-key pressed" : "note-key";
  return (
    <div className={divClass}>{note}</div>
  )
};

export default NoteKey;
