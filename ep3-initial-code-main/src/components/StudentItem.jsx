import React from "react";
import "./StudentItem.css";
import StudentTag from "./StudentTag";
import { useState } from "react";

function StudentItem(props) {
  
  const surname = props.surname;
  const age = props.age;
  const [name , setName] = useState(props.name)

  const nameHandler = () => {
    setName("Changed")
  }
  return (
    <div className="StudentItem">
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <StudentTag tagAge={age} />
      <button onClick={nameHandler}>Click</button>
    </div>
  );
}

export default StudentItem;
