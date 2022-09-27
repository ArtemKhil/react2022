import React from 'react';
import {Link} from "react-router-dom";

import css from './Comment.module.css';


function Comment({comment}) {
    return (
        <div className={css.comment}>
            <h3>{comment.id}.{comment.name}</h3>

            <span className={css.post}><Link to={comment.postId.toString()}>Get Post</Link></span>
        </div>
    );
}

export{Comment};