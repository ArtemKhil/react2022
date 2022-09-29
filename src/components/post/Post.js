import React from 'react';
import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <div>
            <h3>{post.id}.{post.title}</h3>
            <span><Link to={post.id.toString()}>Get details</Link></span>
        </div>
    );
}

export {Post};