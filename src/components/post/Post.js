import React from 'react';

import css from './Post.module.css';

function Post({post}) {
    return (
        <div className={css.postDiv}>
            <h2>{post.id}.{post.title}</h2>
        </div>
    );
}

export {Post};
