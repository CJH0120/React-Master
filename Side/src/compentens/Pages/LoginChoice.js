import React from 'react';

import Main_1 from "./state1/main_1";
import Main_2 from "./state2/main_2";
import Main_3 from "./state3/main_3";

import { useLocation } from 'react-router-dom'
const LoginChoice =() => {
  const location = useLocation();
  const { InputId,InputPw,userState } = location.state
   
  
    
    if(userState==1)
    {
    return  <Main_1/>
    }
    
    if(userState==2)
    {
    return <Main_2/>
    }
    
    if(userState==3)
    {
    return  <Main_3/>
     }   
    else{
      
    }
    return(
      <div>
        
      </div>
    )
   }


export default LoginChoice;