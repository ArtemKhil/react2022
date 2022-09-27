import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../post/Post";


function Posts() {

    const {postId} = useParams();

    const [post,setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data})=>{
            setPost(data);})
    }, [postId]);


    return (
        <div>
            {
             post && (<Post post={post}/>)
            }
        </div>
    );
}

export {Posts};
