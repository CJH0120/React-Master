
import './App.css';
import Login from "./compentens/Login/Login";
import Notice from './compentens/Login/notice';
import Join from './compentens/Pages/Join';
import Error from './compentens/Pages/error';
import Home from './compentens/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
  
      <Routes>
      <Route path="/" element={ <Home/>   }/>
   
      <Route path="/*" element={<Error/> }/>

 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
