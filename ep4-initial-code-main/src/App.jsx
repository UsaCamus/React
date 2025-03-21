import { useState } from "react";
import "./App.css";
import NewStudentItem from "./components/NewStudentItem/NewStudentItem";
import StudentList from "./components/StudentList/StudentList";

let lastId = 4;
const INITALSTUDENT = [
  { id: 1, name: "Samuel", surname: "Jackson", age: 73, bType: "O" },
  { id: 2, name: "Keanu", surname: "Reeves", age: 58, bType: "A" },
  { id: 3, name: "Tom", surname: "Cruise", age: 60, bType: "AB" },
  { id: 4, name: "Johnny", surname: "Depp", age: 59, bType: "A" },
];

function App() {
  
  const [status, setStatus] = useState("Available");
  const [studentList , setStudentList] = useState(INITALSTUDENT);
  const [isShow, setIsShow] = useState(false);

  const clickEventHandler = () => {
    setStatus("Busy");
    console.log("status: ", status);
  };

  const addStudentHandler = (newStudentData) => {
    const newStudent = {
      ...newStudentData,
      id: ++lastId,
    };
    console.log(newStudent);
    setStudentList([newStudent, ...studentList])
    // setStudentList(prevList => [newStudent, ...prevList]) ได้สองแบบ
  };

  const deleteHandler = (id) => {
    const newStudentList = studentList.filter((e) => e.id !== id);
    setStudentList(newStudentList)
  }

  const editHandler = (id, student) => {
    //Clone new list
    const newStudentList = [...studentList]

    //Find and update the target student
    const idx = studentList.findIndex(e => e.id === id);
    newStudentList[idx] = {...student}

    //Set State
    setStudentList(newStudentList);
  }

  return (
    <div className="App">
      {isShow ? (<NewStudentItem setIsShow={setIsShow} onAddStudent={addStudentHandler} /> 
      ) : ( 
        <div className="add-button-container">
          <button onClick={() => {setIsShow(true)}}>Add New Student</button>
        </div>
        )
      }
      <hr/>
      <StudentList editHandler={editHandler} deleteHandler={deleteHandler} studentList={studentList}/>
      <h3>Status: {status}</h3>
      <button onClick={clickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
