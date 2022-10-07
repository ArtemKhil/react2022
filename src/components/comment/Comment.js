import React from 'react';

function Comment({comment}) {
    return (
        <div>
            {comment.id}.{comment.name}
        </div>
    );
}

export {Comment};