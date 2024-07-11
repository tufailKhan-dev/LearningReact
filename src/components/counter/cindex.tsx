import React, { useState } from "react";

const Counter:React.FC = (props) => {
    let [counter, setCounter] = useState(0);

    const handleEle = () => {
        setCounter(counter + 1);

    };
    const handleEleD = () => {
        setCounter(counter - 1);

    };
    return (
        <div className="counter-container">
            <h1>
                {counter}
            </h1>
                <button onClick={() => handleEle()}>INC</button>
                <button onClick={() => handleEleD()}>DEC</button>
        </div>
    );
};


export default Counter