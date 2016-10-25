import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';



const App = () => (
  <div>I DECREE THE DIV HAS BEEN REPLACED</div>
)

document.addEventListener("DOMContentLoaded",
  () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(
      < Root store={store} />, root
    );
    window.store = store;
  }
);


/*
<Foo, x={y}, b={c}>

Foo({x: y, b: c})
*/
