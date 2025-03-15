import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemCard from './component/ItemCard'

function App() {

  return (
    <div className='App'>
      <h1>Item List</h1>
      <ItemCard name={"Sugar"} price={25} isSwap={false}/>
      <ItemCard name="Chicken" price={50} isSwap={false}/>
      <ItemCard name={"Paper"} price={100} isSwap={false}/>
    </div>    
  )
}

export default App
