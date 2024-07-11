import React from "react";
import Todoitem from './TodoItem/index'
import "./style.css";

interface ITodoitem {
   id:number;
   title:string;
}
interface TodoProps {
   items: ITodoitem[];
}
const Todo: React.FC<TodoProps> = (props) => {
return (
 <div className="todo-container">
    <ol>
    {
      props.items.map(item => <Todoitem key={item.id} title={item.title}/>)
    }
    </ol>
 </div>
);
};


export default Todo