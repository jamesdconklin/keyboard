import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';



const App = () => (
  <div>I DECREE THE DIV HAS BEEN REPLACED</div>
)

document.addEventListener("DOMContentLoaded",
  () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(
      <App />, root
    );
    window.store = store;
  }
);
