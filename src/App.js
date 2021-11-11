import React, { useState} from 'react'
import './App.css'

export default function App() {

  const [count,setCount] = useState(0);

  return (
    <div className='App'>
      <h1>
        Counter App
      </h1>
      <h2>
        Current Count is {count}
      </h2>
      <button onClick={()=> setCount(0)}> Reset Counter</button>
      <button onClick={()=> (count>=10 ? "" : setCount(count+1))}> Increase Counter</button>
      <button onClick={()=> (count===0 ? "" : setCount(count-1))}>Decrease Counter</button>
    </div>
  )
}
 