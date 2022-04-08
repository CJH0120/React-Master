
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../../assets/join.css';
const Join = ({viewPage,setViewPage}) => {
  
  
  //이전 페이지로 돌아가기
  const backHandeler = () => {
    {setViewPage(!viewPage)};
  }

  //const
  const [userEmail,setuserEmail] =  useState("");
  const [userPw,setuserPw] =  useState("");
  const [userPwCh,setuserPwCh] =  useState("");
  const [userName,setuserName] =  useState("");
  const [userPhone,setuserPhone] =  useState("");
// 유효성검사멘트
const errPwMgs = "비밀번호 다시 입력"
const errPwChMgs = "사용가능 한 비밀번호 "
const suessPwMgs = "비밀번호 완료"
const suessPwChMgs = "비밀번호 일치하지되었슴다"


//정규식
var PWD_RULE=  /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;







//Handler
const HandleInputEmail =(e)=>{setuserEmail(e.target.value);
 
  fetch('여기다가 쿼리문 넘겨받을 주소', {
    method: 'POST',                                      //------ㅣ 
    headers: {                                           //------ㅣ    기본문구
        'Content-Type': 'application/json',              //------ㅣ 
    },                                                   //------ㅣ 
    body: JSON.stringify({                               //------ㅣ
        'userEmail' :'userEmail'                          //보낼값
    })
  })
  .then(response => response.json())
  .then(response => {
    if (response) {
   
    }
  })
}
 

 


const HandleInputPw =(e)=> {                                                //핸들러 선언
    setuserPw(e.target.value) ;                                             //setuserPw 값이 바뀌는거 감지
    !PWD_RULE.test(userPw)?console.log("다시2입력") :console.log("통과")    //정규식 통과안했니?=>웅 : 아니
     };                                                                     

const HandleInputPwCh =(e)=> {                                          
    setuserPwCh(e.target.value) ;                                    
    !(userPw===userPwCh)?console.log("다시입력") :console.log("통과")
     };                                               
     
     
const HandleInputName =(e)=> setuserName(e.target.value) 
const HandleInputPhone =(e)=> setuserPhone(e.target.value) 
const HandleSubmit =(e) => {e.preventDefault();  }  

// // useEffect
 //비밀번호 정규식
// console.log(userPw)
//함수호출

    return(
 <>
       
        <div className="join_form">
          <fieldset>
            <div className='outbtn'>
          <img onClick={backHandeler} className='join_form_img' src='https://cdn.discordapp.com/attachments/954273372760571914/961321171117301760/unknown.png'/>
          </div>
                      <h2>회원가입</h2>

            <div>
            <span>이메일
              <input type='email'
              value={userEmail}
              onChange={HandleInputEmail}
              /></span>
            </div>
            
            <div>
            <span>비밀번호
              <input type='password'
              value={userPw}
              onChange={HandleInputPw}
              /></span>
              
            </div>
            
            <div>
            <span>비밀번호 확인
              <input type='password'
              value={userPwCh}
              onChange={HandleInputPwCh}
              /></span>
            </div>
            
            <div>
            <span>이름
              <input
              value={userName}
             onChange={HandleInputName}
              /></span>
            </div>

            <div>
            <span>핸드폰
              <input
              value={userPhone}
             onChange={HandleInputPhone}
              /></span>
            </div>
            
            <div>
            <button
            onClick={HandleSubmit}
            >가입완료</button>
            </div>
          </fieldset>
        </div>
        
    </>
    )
}

export default Join