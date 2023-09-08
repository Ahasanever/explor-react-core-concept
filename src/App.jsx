
import './App.css'
import Counter from './count'
import Team from './team'
import Users from './users'
import Friends from './friends'


function App() {
  function handleClick(){
    alert ('button klick')
  }

const handleClick2 =() =>{
  alert ('button 2 click')
}


const addFour = (num)=>{
  alert(num+5);
}
  return (
    <>
     
      <h3> React core concepts</h3>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <Counter></Counter>

     <button onClick={handleClick}>click me</button>

     <button onClick={handleClick2}>click 2</button>

     <button onClick={() =>{alert('third button click')}}>third</button>

     <button onClick={() => addFour(3 )}>four</button>
     
    </>
  )
}

export default App
