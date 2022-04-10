import React from 'react';
import './App.css';
import Error from './compentens/Pages/error';
import Home from './compentens/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginChoice from './compentens/Pages/LoginChoice';




function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
  
      <Routes>
       
      <Route path="/" element={ <Home/>   }/>
      <Route path='/Main' element={<LoginChoice/>}/>
      <Route path="/*" element={<Error/> }/>

 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
