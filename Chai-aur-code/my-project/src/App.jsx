import './App.css'
import Card  from './Components/Card';

function App() {
  
  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl">Tailwind testing</h1>
      //{<Card channerl="chaiaurcode" someObj={ myObj} someArr={myArr} /> }
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Yogesh" btnText="Visit me"/>
    </div>
  )
}

export default App
