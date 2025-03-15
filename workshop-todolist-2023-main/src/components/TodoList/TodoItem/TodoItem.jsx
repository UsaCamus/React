import React from "react";
import "./TodoItem.css"

function TodoItem (props) {
    const taskname = props.task
    const isFinished = props.isFinished
    const dueDate = props.dueDate

    const date = dueDate.getDate();
    const month = dueDate.getMonth() + 1;
    const year = dueDate.getFullYear();

    return (
        <div className="form-control">
            <div className="cb-container">
                <input type="checkbox" checked={isFinished}/>
            </div>
            <div className="tn-container">
                {taskname}
            </div>
            <div className="dd-container">
                {date}/{month}/{year}
            </div>
        </div>
    )
}

export default TodoItem