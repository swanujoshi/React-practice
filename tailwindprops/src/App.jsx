import './App.css'
import Card from './Component/Cards'

function App() {

  //  let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="BettyCopper" btnText="click me" />
      <Card username="veronica" />
    </>
  )
}

export default App
