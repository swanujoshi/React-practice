import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setcounter] = useState(0);

  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    if(counter >= 20){
      alert("Counter cannot be more than 20");
      return;
    }
    setcounter(counter +1 );
  }

  const subValue = () => {
    // counter = counter - 1;
    // console.log(counter);
    if(counter <= 0){
      alert("Counter cannot be less than 0");
      return;
    }
    setcounter(counter - 1);
  }

  return (
    <>
    <h1>Counter Game</h1>
    <h2> Counter Value : {counter}</h2>
    <button onClick={addValue}>
      Add Value {counter}
    </button>
    <br />
    <button onClick={subValue}>
      Remove Value {counter}
    </button>
    
    </>
  )
}

export default App
