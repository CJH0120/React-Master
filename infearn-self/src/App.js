
import './App.css';
import FixFooter from './fix/footer';
import FixHeader from './fix/header';
import Counters from './count/counters';
function App() {

  const counterProps={
    a:1,
    b:2,
    c:3,
    d:5,
    initialValue:0,
  };
  return (
  
    <>
      <div className='main_warp'>
    <FixHeader/>
    
    <Counters {...counterProps}/>
   
     <FixFooter/>
     </div>
   </>
   
  );
}

export default App;
