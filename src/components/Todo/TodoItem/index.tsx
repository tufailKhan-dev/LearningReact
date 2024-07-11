import React from "react";
import "./style.css";

interface TodoItemProps {
  title:string;
}
const Todoitem: React.FC<TodoItemProps> = ({title}) => {
  return <li>{title}</li>  
};


export default Todoitem