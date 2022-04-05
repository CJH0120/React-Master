import React,{useEffect, useState} from "react";

const UnmounTest =() =>{

  useEffect(()=>{
    console.log("mount");
    return()=>{
      alert("!!");
    }
  },[])
  return <div>UnmounTest Testing Component</div>
}
const LifeCylce=()=>{
  const [isVisible,setisVisible]=useState(false);
  const toggle =() => setisVisible(!isVisible);

    return(
     <div style={{padding:20}}>
         <button onClick={toggle}>on/off</button>
        {isVisible && <UnmounTest/>}
    </div>
    )
}

export default LifeCylce