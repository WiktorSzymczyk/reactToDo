import React, {useState} from "react";
import ToDoList from "./ToDoList";
import "./style.css"

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
    <div  style={{backgroundImage: `url("https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000")`, 
      backgroundRepeat: 'no-repeat',
      width:'100%' }}>
        <ToDoList todos={todos} />
        <input type="text" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
        <div>0 left to do</div>
      </div>
    </>
  )
}

export default App;
