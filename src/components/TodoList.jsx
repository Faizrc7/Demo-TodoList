import React, { useEffect } from 'react';
import { useState } from 'react';

const TodoList = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleClick = () => {
        if(input.length != 0){
            setTodos([...todos, input]);
            setInput("");
        } else {
            console.log("byee")
        }
    }
    const handleDel = (index) => {
        let newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos);
    };

    useEffect(() => {
        console.log("Updated Todos:", todos);
        console.log("first")
    }, [todos]);


  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
        {
            todos.map((todo, index)=>{
                return <li key={index}>
                            <span>{todo}</span>
                            <button onClick={()=>{handleDel(index)}}>-</button>
                        </li>
            })
        }
    </div>
  )
}

export default TodoList