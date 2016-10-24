import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note'
import rootReducer from './reducers/root_reducer';

const App = () => (
  <div>I DECREE THE DIV HAS BEEN REPLACED</div>
)

document.addEventListener("DOMContentLoaded",
  () => {
    const note = new Note(800)
    window.noteReducer = rootReducer;
    window.note = note
    const root = document.getElementById("root");
    ReactDOM.render(
      <App />, root
    );
  }
);
