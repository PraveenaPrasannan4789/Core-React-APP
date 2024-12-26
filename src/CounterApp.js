import React from 'react';
import { useState , useEffect} from 'react';

const CustomerSalaryIncrement=()=>{
const [state,setState] = useState(false);
const[count,setCount]= useState(0);
const[count1,setCount1]= useState(0);

useEffect(()=>{
    console.log('start')
    return(()=>{
        console.log('unmounti',count)
    })
},[count])

return(
    <>
    <h1 onClick={()=>setState(!state)}>Click here to hide/show</h1>
    <button onClick={()=>{setCount(count+1)}}>Counter</button>
    {
        state?<p>I am Praveena {count}{count1}</p>:null
    }
    </>
)


}

export default CustomerSalaryIncrement;