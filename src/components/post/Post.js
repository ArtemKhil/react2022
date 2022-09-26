import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css'

function Post({post}) {


    return (
        <div className={css.Post}>
            <Link to={`${post.id}/comments`}><h3>{post.id}.{post.title}</h3></Link>
        </div>
    );
}

export {Post};
