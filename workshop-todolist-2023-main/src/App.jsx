import './App.css'
import Header from "./components/Header/Header"
import ToDoList from "./components/TodoList/TodoList"

function App() {
  const todoList = [
    {
      id: 1,
      task: "Read a book",
      dueDate: new Date("2023-02-28"),
      isFinished: false,
    },
    {
      id: 2,
      task: "Buy dog food",
      dueDate: new Date("2024-06-14"),
      isFinished: true,
    },
    {
      id: 3,
      task: "Go to cinema",
      dueDate: new Date("2023-05-20"),
      isFinished: true,
    },
    {
      id: 4,
      task: "Print homework",
      dueDate: new Date("2024-07-26"),
      isFinished: true,
    }
  ]

  return (
    <div className="App">
      {/* Header here */}
      <Header/>
      {/* Todo list here*/}
      <ToDoList todos={todoList}/>
    </div>
  )
}

export default App
