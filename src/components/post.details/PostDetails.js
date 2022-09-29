import React from 'react';

function PostDetails({postDetails}) {

    return (
        <div>
            <h3>{postDetails.id}.{postDetails.name}</h3>
        </div>
    );
}

export {PostDetails};