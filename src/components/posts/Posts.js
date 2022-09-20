import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../post/Post";

function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect((id) => {
        postService.getPostsById(id).then(({data})=> setPosts(data))
    }, []);


    return (
        <div>

            {
                posts.map((post, index) => (<Post key={index} post={post}/>))
            }

        </div>
    );
}

export {Posts};