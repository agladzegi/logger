import React, { useEffect } from 'react';

// CSS
import './App.css';

// Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return <div className='App'>hello world</div>;
};

export default App;
