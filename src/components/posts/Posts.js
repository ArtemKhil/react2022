import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../post/Post";

function Posts() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);


    return (

        <div>

            <Outlet/>

            {
                posts.map((post,index)=><Post key={index} post={post}/>)
            }
        </div>
    );
}

export {Posts};