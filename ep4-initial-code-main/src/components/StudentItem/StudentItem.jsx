import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import { useState } from "react";

function StudentItem(props) {
  let age = props.age;
  const [isEdit, setIsEdit] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentBType, setCurrentBType] = useState("A");

  const onClickEdit = () => {
    setIsEdit(true);
    setCurrentAge(age);
    setCurrentName(props.name);
    setCurrentLastName(props.surname);
    setCurrentBType(props.bType);
  }

  const onClickDone = () => {
    const editValue = {
      name: currentName,
      surname: currentLastName,
      age: currentAge,
      bType: currentBType,
    };
    props.editHandler(props.id, editValue);
    setIsEdit(false);
  }

  if(isEdit){
    return (
      <div className="StudentItem">
        <input type="text" className="edit-input" value={currentName} onChange={e => setCurrentName(e.target.value)} placeholder="firstname"/>
        <input type="text" className="edit-input" value={currentLastName} onChange={e => setCurrentLastName(e.target.value)} placeholder="lastname"/>
        <input type="number" className="edit-input" value={currentAge} onChange={e => setCurrentAge(e.target.value)} placeholder="age" min="1" max="99" step="1"/>
        <select className="edit-select" value={currentBType} onChange={e => setCurrentBType(e.target.value)}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
        <button className="btn btn-success" onClick={onClickDone}>Done</button>
        <button className="btn btn-default" onClick={() => setIsEdit(false)}>Cancel</button>
      </div>
    )
  }

  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age}/>
        <div>{props.bType}</div>
        <button className="btn btn-warning" onClick={onClickEdit}>Edit</button>
        <button className="btn btn-danger" onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </div>
  )
}

export default StudentItem;