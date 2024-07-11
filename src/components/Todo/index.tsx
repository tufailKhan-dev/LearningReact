import React from "react";
import Todoitem from './TodoItem/index'
import "./style.css";
const Todo: React.FC = () => {
return (
 <div className="todo-container">
    <ol>
    <Todoitem/>
    <Todoitem/>
    <Todoitem/>
    <Todoitem/>
    </ol>
 </div>
);
};


export default Todo