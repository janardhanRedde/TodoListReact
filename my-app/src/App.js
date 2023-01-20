import react, { useState, useRef} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const newTodoText =useRef();

function handlesave() {
  if (newTodoText.current.value === "") return;
  const newTodos = [...todos,newTodoText.current.value];
  setTodos(newTodos);
  
}

const handledelete = (indexvalue) => {
  const newTodos = todos.filter((todo,index) => index !== indexvalue);
  setTodos(newTodos);
}

  return (
    
    <div className="container">
      
      <p className="heading">Todo List :  React</p>
      <input className="search" ref={newTodoText}  type="text" placeholder="AddTodo"></input> &nbsp;&nbsp;
      <button className="savebtn" onClick={handlesave}>save</button>
      <TodoList ItemList={todos} handledelete={handledelete} />
      </div>
   
  );
}

export default App;
