import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Hero from './Compounds/Hero/Hero';
import Reason from './Compounds/Reason/Reason';
import Program from './Compounds/Programs/Program';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/Program' element={<Program/>}/>
        <Route path='/Reason' element={<Reason/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
