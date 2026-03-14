
import './App.css'
import Counter from './Counter'
import Card from './Card'
import Batsman from './Batsman'
import Users from './Users'
import CounterTwo from './Counter-ii'

function App() {

  const handle = () => {
    alert("Button 1 Clicked")
  }

  function handleClick() {
    alert("Button 2 Clicked")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);

  }

  const handle5 = () => {
    alert("Clicked button 5")
  }





  return (
    <>
      <h2>Explore React Core Concepts</h2>

      <CounterTwo></CounterTwo>

      <Users></Users>


      <Batsman></Batsman>
      <Counter></Counter>

      <br />
      <button onClick={handle}>Button 1</button>

      <button onClick={handleClick}>Button 2</button>

      <button onClick={() => alert("Button 3 Clicked")}>Button 3</button>

      <button onClick={() => handleAdd5(10)}>Button 4</button>
      <button onClick={handle5}>Button 5</button>
      <br />

      <Card name='Bayjid Alom' tech='Web'></Card>
    </>
  )
}

export default App
