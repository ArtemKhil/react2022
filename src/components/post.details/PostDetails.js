import React from 'react';

import css from './PostDetails.module.css'


function PostDetails({postDetails}) {


    return (
        <div className={css.comment}>
            <h3>{postDetails.id}.{postDetails.name}</h3>
        </div>
    );
}

export  {PostDetails};