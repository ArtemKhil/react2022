import React from 'react';

import css from './Comment.module.css';

function Comment({comment}) {
    return (
        <div className={css.Comment}>
            <h3>{comment.id}.{comment.name}</h3>
        </div>
    );
}

export {Comment};