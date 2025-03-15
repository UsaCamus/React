import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [checkbox, setCheckbox] = useState(props.isFinished);
  const [isEdit, setIsEdit] = useState(false);
  const [curTask, setCurTask] = useState("");
  const [curDuedate, setCurDuedate] = useState("");

  const task = props.task;
  const dueDate = props.dueDate;
  const date = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();

  const resolveDueDate = (date, month, year) => {
    let convertDate, convertMonth
    if(String(date).length === 1){
      convertDate = "0"+date;
    }else{
      convertDate = date;
    }
    if(String(month).length === 1){
      convertMonth = "0"+month;
    }else{
      convertMonth = month;
    }
    return `${year}-${convertMonth}-${convertDate}`;
  }

  const editHandler = () => {
    setIsEdit(true);
    setCurTask(props.task);
    const dateToSet = resolveDueDate(date, month, year)
    setCurDuedate(dateToSet);
  }

  const onClickDone = () => {
    const editValue = {
      id: props.id,
      task: curTask,
      dueDate: new Date(curDuedate),
      isFinished: checkbox,
    }
    props.editHandler(props.id , editValue);
    setIsEdit(false);
  }

  if(isEdit) {
    return (
      <div className="form-control">
        <div className="cb-container">
          <input checked={checkbox} onChange={e => setCheckbox(e.target.checked)} type="checkbox" />
        </div>
        <div className="tn-container">
          <input type="text" value={curTask} onChange={e => setCurTask(e.target.value)}/>
        </div>
        <div className="dd-container">
          <input type="date" value={curDuedate} onChange={e => setCurDuedate(e.target.value)}/>
        </div>
        <div className="ed-container">
          <button onClick={onClickDone}>Done</button>
        </div>
        <div className="dl-container">
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </div>
      </div>
    )
  }


  return (
    <div className="form-control">
      <div className="cb-container">
        <input checked={checkbox} onChange={e => setCheckbox(e.target.checked)} type="checkbox" />
      </div>
      <div className="tn-container">{task}</div>
      <div className="dd-container">
        {date}/{month}/{year}
      </div>
      <div className="ed-container">
        <button onClick={editHandler}>Edit</button>
      </div>
      <div className="dl-container">
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
