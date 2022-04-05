import {useRef, useState} from "react";


const DiaryEditor = ({onCreate}) => {


const authorInput = useRef();
const contentTextArea =useRef();


const[state,setState] = useState({
    author:"",
    content:"",
    emotion:1,
});

const handleChangeState=(e)=>{
  
    setState({
        ...state,
        [e.target.name]: e.target.value,

    });
};

const handelSubmit = () =>{

    if(state.author.length <1){
        authorInput.current.focus();
        return;
    }

    if(state.content.length <5 ){
        contentTextArea.current.focus();
        
        return;
    }
    onCreate(state.author,state.content,state.emotion)



    console.log(state);
    alert('저장 성공!');
    setState({
        author:"",
        content:"",
        emotion:1,
    })
}

    return( 
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
      
        <div className="nameinput">
            <input 
            ref={authorInput}
            value={state.author} 
            name="author"
            onChange={handleChangeState}/>
        </div>
       
        <div className="contentinput">

            <textarea 
            ref={contentTextArea}
            value={state.content}
            name="content"
              onChange={handleChangeState}/>

         
        </div>

        <div>
            <span>오늘의 감정 점수</span>
            <select name="emotion"
             value={state.emotion} 
             onChange={handleChangeState}
             className="emtionselcet">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
            <div className="btn">
                <button onClick={handelSubmit}>저장하기</button>
            </div>
    </div>
);
};

export default DiaryEditor;

