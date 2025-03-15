import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentItem from "./components/StudentItem"
import StudentItem2 from "./components/StudentItem2"
import StudentExample from './components/StudentExample'

function App() {
  const [count, setCount] = useState(0)

  const studentList = [
    {name:"Usa",surname:"Sawadee",age: 27},
    {name:"Sarun",surname:"Sawadee",age: 40},
    {name:"Pisanuwath",surname:"Sawadee",age: 67},
    {name:"Boonsok",surname:"Sawadee",age: 67}
  ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}/>
      <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}/>
      <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}/>
      <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}/>
      <StudentItem2/>
      <StudentExample>
        <div> Test 1</div>
        <div> Test 2</div>
      </StudentExample>
    </>
  )
}

export default App
