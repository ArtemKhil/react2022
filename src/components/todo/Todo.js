import React from 'react';

import css from './Todo.module.css';

function Todo({todo}) {
    return (
        <div className={css.todo}>
            <h3>{todo.id}.{todo.title}</h3>
        </div>
    );
}

export {Todo};