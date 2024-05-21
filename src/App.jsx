import { useState } from 'react'
import './App.css'
function App() {
  return (
    <>  
      <div>
        <input type='text' placeholder='Enter your name'></input>
        <input type='text' placeholder='Enter your age'></input>
        <input type='submit' onClick={Click}></input>
      </div>
    </> 
  ) 
}
export default App
