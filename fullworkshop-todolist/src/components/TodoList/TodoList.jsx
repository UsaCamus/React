import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
    const todoList = props.todoList;
    const currentYear = props.currentYear;

    const filterTodos = todoList.filter( t => t.dueDate.getFullYear() === Number(currentYear))

    return (
    <div className="tdl-container">
      {filterTodos.map(e => <TodoItem 
        key={e.id}
        task={e.task}
        isFinished={e.isFinished}
        dueDate={e.dueDate}
        id={e.id}
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
      />)}
    </div>
  );
}

export default TodoList;
