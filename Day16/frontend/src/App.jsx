import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => { 
    axios.get('/api/jokes').then((response) => {
    setJokes(response.data)
    })
  })

  return (
    <>
      <h1>hello world!</h1>
      <p>Jokes: {jokes.length}</p>
      { 
        jokes.map((joke,index) => ( 
          <div key={ joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.content}</p>
            
          </div>
        ))
      }
    </>
  )
}

export default App
