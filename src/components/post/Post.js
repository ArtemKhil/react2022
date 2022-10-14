import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";
import css from './Post.module.css'

function Post({post}) {

    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div>

            <div className={css.posts}>
                <h3>{id}.{title}</h3>
            </div>

            <div className={css.buttons}>
                <button onClick={()=>{dispatch(postActions.getCommentsByPostId({id}))}}>Get comments</button>
                <button onClick={()=>{dispatch(postActions.deleteById({id}))}}>Delete Post</button>
            </div>


        </div>
    );
}

export {Post};