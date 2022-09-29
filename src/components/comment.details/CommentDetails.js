import React from 'react';

function CommentDetails({commentDetails}) {
    return (
        <div>
            <h3>{commentDetails.id}.{commentDetails.name}</h3>
        </div>
    );
}

export {CommentDetails};