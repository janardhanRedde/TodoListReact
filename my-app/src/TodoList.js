import React from "react";

function TodoList({ ItemList,handledelete}) {
    return (
        <ul>
            {ItemList.map((todo,index) => (
                <li key={index}> 
                <input type="checkbox" />
                {todo} &nbsp; <button className="deletebtn" onClick={() => handledelete(index)} >Delete</button></li>
            ))}
        </ul>
    );
}

export default TodoList;