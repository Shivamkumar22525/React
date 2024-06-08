import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,lengthChange] = useState(8);
  const[numAllow,numNotAllow] = useState(false);
  const[charAllow,charNotAllow] = useState(false);
  const[password,passwordChange] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

     if(numAllow) str+="0123456789";
     if(charAllow) str+="!@#$%^&*()-_+=[]{}`~;'<>?/";

     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
     }
     passwordChange(pass);

  },[length,numAllow,charAllow,passwordChange])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly/>
          <button
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2-'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            className='cursor-grabbing'
            onChange={(e)=>{lengthChange(e.target.value)}}/>
            <label htmlFor="">Length: {length}</label>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              defaultChecked={numAllow} 
              id="numInput"
              onChange={()=>{
                numNotAllow((prev)=> !prev)
              }} />
              <label htmlFor="numInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllow} 
              id="charInput"
              onChange={()=>{
                charNotAllow((prev)=> !prev)
              }} />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
