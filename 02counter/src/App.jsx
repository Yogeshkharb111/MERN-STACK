import { useState } from 'react'


function App() {
 

  let [counter,setCounter]=useState(15);
  const addValue = () => { 
    console.log("Counter: ", counter);
    setCounter(counter+1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h2> hello world !!</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue} disabled= {counter>=20}>Add Value { counter}</button>
      <br/>
      <button onClick={removeValue} disabled={counter<=15}>Remove Value { counter}</button>
    </>
  )
}

export default App
