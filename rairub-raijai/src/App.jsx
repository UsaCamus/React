import { useState } from 'react'
import './App.css'
import LedgerList from './components/LedgerList/LedgerList'
import NewLedger from './components/NewLedger/NewLedger'

let lastId = 4;
const INTAILEDGER = [
  {
    id: 1,
    type: 1,
    category:"เงินออม",
    amount: 5000,
    payment: 1,
  },
  {
    id: 2,
    type: 2,
    category:"อาหาร",
    amount: 1500,
    payment: 3,
  },
  {
    id: 3,
    type: 2,
    category:"ค่าน้ำ-ค่าไฟ",
    amount: 3500,
    payment: 3,
  },
  {
    id: 4,
    type: 1,
    category:"ดอกเบี้ยจากหุ้น",
    amount: 789,
    payment: 2,
  },
];

function App() {
  const [ledgerList, setLedgerList] = useState(INTAILEDGER)
  const [isShow, setIsShow] = useState(false);

  const AddSubmitLedger = (newLedgerList) => {
    const newLedger = {
      ...newLedgerList,
      id: ++lastId,
    }
    setLedgerList([...ledgerList, newLedger])
  }

  const DeleteHandler = (id) => {
    const newLedger = ledgerList.filter(e => e.id !== id)
    setLedgerList(newLedger);
  }

  const EditHandler = (id, EditList) => {
    //clone
    const newLedger = [...ledgerList];
    //find
    const idx = ledgerList.findIndex(e => e.id === id);
    newLedger[idx] = {...EditList}
    //set state
    setLedgerList(newLedger)
  }

  return (
      <div className="App">
        <div><h1>รายรับ - รายจ่าย</h1></div>
        {isShow ? (<NewLedger setIsShow={setIsShow} onAddLedger={AddSubmitLedger} /> 
        ) : ( 
          <div className="add-button-container">
            <button className='button-63' onClick={() => {setIsShow(true)}}>Add New Ledger</button>
          </div>
          )
        }
        <LedgerList ledgerList={ledgerList} deleteHandler={DeleteHandler} editHandler={EditHandler}/>
      </div>
  )
}

export default App
