import React from 'react';

function Post(props) {

    let {post} = props;

    return (
        <div>

            <h3>{post.title}</h3>
            <h4>{post.body}</h4>

        </div>
    );
}

export {Post};