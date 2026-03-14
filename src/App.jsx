import './App.css'
import Counter from './Counter'
import Card from './Card'
import Batsman from './Batsman'
import Users from './Users'
import CounterTwo from './Counter-ii'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}



function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

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

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

     <Suspense fallback={<h3>Loading....</h3>}>
       <Users fetchUsers={fetchUsers}></Users>
     </Suspense>

     <Suspense fallback={<h3>Friends are coming......</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
     </Suspense>


      <Batsman></Batsman>
      <Counter></Counter>

      <br />
      <button onClick={handle}>Button 1</button>

      <button onClick={handleClick}>Button 2</button>

      <button onClick={() => alert("Button 3 Clicked")}>Button 3</button>

      <button onClick={() => handleAdd5(10)}>Button 4</button>
      <button onClick={handle5}>Button 5</button>
      <br />

      <Card name='Bayjid Alom' tech='CST'></Card>
    </>
  )
}

export default App
