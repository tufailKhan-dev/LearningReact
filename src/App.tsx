import React from "react";
import Todo from "./components/Todo/index";
import Counter from "./components/counter/cindex";
const App: React.FC = () => {
const myTodoitem = [
{
    id:1,
    title: 'I need to finish',
},
{
    id:2,
    title: 'i am second',
}
];
return <div>
    <Todo items={myTodoitem}/>
    <Counter />

</div>

};

export default App