import React from 'react';

function Post(props) {

    let {post} = props;

    return (
        <div>

            <h4 className={'posts'}>{post.title}</h4>

        </div>
    );
}

export {Post};