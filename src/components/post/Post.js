import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css'

function Post({post}) {


    return (
        <div className={css.Post}>

            <h3>{post.id}.{post.title}</h3>

            <span><Link to={post.id.toString()}>Get comments</Link></span>

        </div>
    );
}

export {Post};
