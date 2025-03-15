import React, { useState } from "react";
import "./NewTodoTask.css"

function NewTodoTask(props) {

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const clickHandler = () => {
        const newTodo = {
            task: task,
            duedate: date,
        }

        props.addNewTodo(newTodo) // ส่งค่ากลับไปยัง func addNewTodo ด้วย newTodo

        setTask("")
        setDate("")
    }

    return(
        <div>
            <div className="add-container">
                <div className="input-container">
                    <div>
                        <label htmlFor="">Task</label>
                        <input type="text" value={task} onChange={ (e) => {setTask(e.target.value)} }/>
                    </div>
                    <div>
                        <label htmlFor="">Due Date</label>
                        <input type="date" value={date} onChange={ (e) => {setDate(e.target.value)} }/>
                    </div>
                </div>
                <div className="add-button">
                    <button onClick={clickHandler}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default NewTodoTask