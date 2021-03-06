import React, { useContext, useState} from 'react'; 

import Login from "../Login/Login"

import Notice from "../Login/notice";
import Join from "./Join";

import { Context } from '../Login/Context';
const Home = () =>{
  
    const [viewPage,setViewPage] =useState(false);
   
  
return( 
    <>
    <Notice/>
    <Context.Provider value={{viewPage,setViewPage}}>
    {viewPage? <Join viewPage={viewPage} setViewPage={setViewPage}/>:<Login />}
    </Context.Provider>

   
    
    </>
    );
}
export default Home;