import { useEffect, useState } from "react";
import '../../assets/login.css';

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
    <form>
      
        <div>
        <h2><img src="https://my.snu.ac.kr/mysnu/images/login/txt_login.png"/></h2>
        </div>
        
        <div className="loginInput_wrap">
        <div className="loginInput">
        <input 
        value={InputId}
        onChange={HandleInputId}
        />
         <br/>
        <input 
        value={InputPw}
        onChange={HandleInputPw}
        type={"password"}/>
        </div>
        
        <button onClick={HandleLogin} className="loginbtn"><span>로그인</span></button>
        </div>
    </form>
    <LoginUtile />
    <Notice_list/>
    <LoginSlide/>
    </div>
    </div>
    </>
);
}

export default Login