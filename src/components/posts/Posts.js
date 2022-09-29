import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import {Post} from "../post/Post";

function Posts() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data})=>{setPosts(data)})
    }, []);


    return (
        <div>
            {
                posts.map((post, value) => <Post key={value} post={post}/>)
            }
        </div>
    );
}

export {Posts};