import React from 'react';

function Post({post}) {
    return (
        <div>
            <div>
                {post.id}.{post.title}
            </div>
        </div>
    );
}

export {Post};