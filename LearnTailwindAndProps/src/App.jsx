import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let myobj = {
    name:"shivam",
    age:22
  }

  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind Css</h1>
     <Card username ="shivam" btnText = "fuck me"/>
     <Card username="manish" btnText = "fingerning me "/>     
    </>
  )
}

export default App
