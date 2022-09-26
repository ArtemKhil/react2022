import React, {useEffect, useState} from 'react';
import {todoService} from "../../services";
import {Todo} from "../todo/Todo";

function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data))
    }, []);


    return (
        <div>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo}/>)
            }
        </div>
    );
}

export {Todos};