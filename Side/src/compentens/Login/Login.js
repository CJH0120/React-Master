import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/login.css';
import React from 'react';

import LoginSlide from "./LoginSlide";
import LoginUtile from "./LoginUtile";
import Notice_list from "./notice_list";
const Login = () =>{

//  const Area
const [InputId, SetInputId] = useState("");
const [InputPw, SetInputPw] = useState("");



// useEffect Area

// useEffect(() =>{
//     console.log(`${InputPw} : 인풋 PW 렌더링`)    
// },[InputPw])
// useEffect(() =>{
//     console.log(`${InputId} : 인풋 ID 렌더링`)    
// },[InputId])
  useEffect(()=>{
    console.log('렌더링 한번만')
  },[])

// handle Area
const HandleInputId =(e)=> SetInputId(e.target.value)
const HandleInputPw =(e)=> SetInputPw(e.target.value)
const HandleLogin =(e) =>{
    e.preventDefault();
    alert(`아이디:${InputId} 비밀번호:${InputPw}`)}
return(
  
  <>
<div className="rightForm">
  
  <div className="rightForm_wrap">
      <div className="chooseMain">
      <button className="ChooseLogin"><span>로그인</span></button>
      <button className="ChooseJoin"><span>회원가입</span></button>
      </div> 
      
        <div className="square_main">
          <p>여기다가 뭘쓸까</p>

        </div>
    
    <div className="hr-sect"> or </div>
      
    <form>
        <div className="loginInput_wrap">
        
       
        <input 
        value={InputId}
        onChange={HandleInputId}
        className="LoginId"
        />
         <br/>

         
        <input 
        value={InputPw}
        onChange={HandleInputPw}
        className="LoginPw"
        type={"password"}/>
        <br/>
       

      <div className="btn_area">
      <Link
       to='/Main' state={{ InputId: InputId, InputPw:InputPw, userState:'1'}}> 
      <button className="loginbtn"><span className="loginbtn_span">로그인</span></button>
      </Link>
      
      <Link
       to='/Main' state={{ InputId: InputId, InputPw:InputPw, userState:'1'}}> 
      <span className="btn_span"><LoginUtile /></span>
      </Link>
      </div>

      </div>

    </form>
    
    <Notice_list/>
    <LoginSlide/>
    
    </div>
    </div>
    </>
);
}

export default Login