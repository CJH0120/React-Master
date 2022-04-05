
import { useEffect, useRef,useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// https://jsonplaceholder.typicode.com/comments


function App() {
  const[data,setData] = useState([]);
  const getData= async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json());
    console.log(res)
    const initData =res.slice(0,400).map((it)=>{
      return{
        author:it.email,
        content : it.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_date: new Date().getTime(),
        id : dataId.current++
      }
    })

    setData(initData);
  };
  
  
  useEffect(()=>{
    
  getData();
  },[])
  

  const dataId = useRef(0);


  const onCreate= (author,content,emotion) =>{
    const created_date =new Date().getTime();

    const newItem={
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current+=1 ;
    setData([newItem,...data]);
  };

const onRemove =(targerId)=>{
  console.log(`${targerId} 가 삭제되었슴다`)
  const newDiaryList = data.filter((it) =>it.id !== targerId);
  console.log(newDiaryList);
  setData(newDiaryList);
}
const onEdit =(targetId,newContet) =>{
  setData(
    data.map((it)=>
     it.id ===targetId?{...it,content:newContet} : it
  )
  );
}


  return (
    <div className="App">
     
    <DiaryEditor onCreate={onCreate}/>
    <DiaryList onEdit={onEdit}onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
