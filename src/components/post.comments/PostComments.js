import React from 'react';

import css from './PostComments.module.css';


function PostComments({comment}) {

    const {id, name} = comment;

    return (
        <div className={css.comments}>
            <h4>{id}.{name}</h4>
        </div>
    );
}

export {PostComments};