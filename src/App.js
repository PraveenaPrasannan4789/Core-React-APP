
import './App.css';
import HeaderData  from './Header';
import React ,{ useState } from 'react';
import Counter from './Counter';
import Employee from './Employee';


function App() {
const [count,setCount]= useState(0);
const addCounter=()=>{
setCount(count+1);
}

  const data='data';
  let obj={
    'data':data, 
    'clickData':count
  }
  let employee=[{
    name:"ammu",
    age:"28"
  },
  {
    name:"sreelal",
    age:"30"
  }]
  return (
    <div className="App">
      <Header1/>
      <button onClick={addCounter}>add</button>
      <Counter {...obj}/>
      <p>description</p>
      <HeaderData data={data}/>
     {
      employee.map((data,idx)=>
       (
          <div>
          <h1>Employee</h1>
          <Employee id={idx} {...data}/>
          </div>
        )
      )
     }
    </div>
  );
}

function Header1(){
  return(
    <h2 style={{background:'red', color:"black"}}>This is header in same file</h2>
  )
}
export default App;
