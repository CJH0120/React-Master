import React , { useState,createContext } from 'react';
import Calendar from 'react-calendar';

function CalendarS() {
  
  const [todolist, settodolist] = useState("");
  const [clickvalue, clickonChange] = useState(new Date());
  const clickday = {
      month :  clickvalue.getMonth()+1 +  "월",
      day : clickvalue.getDate()+"일"
  };


  return (
      <>
     
      <div className='main_Clc'>

          <div className='main_Clc_top'>
          <span>캘린더 Todolist</span>
          </div>

      <div className='Clc_wrap'>

      <div className='Clc'>
      <Calendar  
          onClickDay={clickonChange}
    
            />
         
          
      </div>
          <div className='Todo'>
             <div>
                  <p><span>Todo</span>&nbsp;&nbsp;
                  <span>{clickday.month}</span>&nbsp;
                  <span>{clickday.day}</span>
                  </p>
                  </div>
                  <div>
                    <textarea className='todolist' value={todolist}></textarea>
                    </div>
              <div className='Todo_Plus'>
                    <button className=''>저장하기</button>
              </div>

          </div>
    
     
      </div>
             


     
      </div>
  </>
  )
}
export default CalendarS;
