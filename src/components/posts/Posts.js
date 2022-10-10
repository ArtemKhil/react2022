import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../post/Post";
import {PostComments} from "../post.comments/PostComments";

function Posts() {

    const dispatch = useDispatch();

    const {posts, loading, error, getCommentsByPostId} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, []);


    return (
        <div>
            {loading && <h1>Posts are loading)</h1>}
            {error && <h1>Error</h1>}

            {
                getCommentsByPostId.map(comment=><PostComments key={comment.id} comment={comment}/>)
            }

            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts};