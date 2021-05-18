import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Projects from './Components/projects'

ReactDOM.render(
  <React.StrictMode>
      <Projects/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
