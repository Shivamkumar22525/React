import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [Num, setNum] = useState(0);

  const addValue = ()=>{
    if(Num!=20){
      setNum(Num+1);
      setNum(Num => Num+1);
      setNum(Num => Num+1);


    }else{
      setNum(Num);
    }
  }

  const decValue = ()=>{
    if(Num==0){
      setNum(Num = 0)
    }else{
      setNum(Num-1);
    }
  }



  return (
    <>
     <h1>this is kala jatt</h1>
     <h2>counter value : {Num} </h2>

     <button
     onClick ={addValue}
     >Increase</button>
     <br />
     <button
     onClick={decValue}
     >Decrease</button>
    </>
  )
}

export default App
