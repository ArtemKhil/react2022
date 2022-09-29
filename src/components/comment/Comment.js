import React from 'react';
import {Link} from "react-router-dom";

function Comment({comment}) {
    return (
        <div>
            <h3>{comment.id}.{comment.name}</h3>
            <span><Link to={comment.id.toString()}>Get details</Link></span>
        </div>
    );
}

export {Comment};