import React, { createContext, useContext, useState } from 'react'; 
import '../../assets/login.css';
import '../Pages/Home';
import { Context } from './Context';

const LoginUtile = () =>{
   const {viewPage,setViewPage}=useContext(Context);

   const clickHandle = ()=>{setViewPage(!viewPage)};
  
   
   
   
   return(
    <div className='LoginUtile' >
            <a> 아이디찾기</a>
            <a> 비밀번호 찾기</a>
            <br/>
            <a onClick={clickHandle}>아이디만들기</a>
    </div>
 
)

}

export default LoginUtile;