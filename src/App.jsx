
import './App.css'
import Counter from './Counter'
import Card from './Card'
import Batsman from './Batsman'

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





  return (
    <>
      <h2>Explore React Core Concepts</h2>

      <Batsman></Batsman>
      <Counter></Counter>


      <button onClick={handle}>Button 1</button>
      <br />
      <button onClick={handleClick}>Button 2</button>
      <br />
      <button onClick={() => alert("Button 3 Clicked")}>Button 3</button>
      <br />
      <button onClick={() => handleAdd5(10)}>Button 4</button>

      <Card name='Bayjid Alom' tech='Web'></Card>
    </>
  )
}

export default App
