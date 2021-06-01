import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Routes from './Routes'
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
    <div>
      <Routes/>
    </div>
   </BrowserRouter>  
  );
}

export default App;
