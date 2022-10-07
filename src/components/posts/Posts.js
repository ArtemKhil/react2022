import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postsService} from "../../services";
import {Post} from "../post/Post";
import {LOAD_POSTS} from "../../redux";


function Posts() {

    const {posts} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, []);


    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts};
