import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {PostDetails} from "../post.details/PostDetails";

function PostsDetails() {

    const {comments} = useParams();

    const [postsDetails,setPostsDetails] = useState([]);

    useEffect(() => {
        postsService.getPostCommentsById(comments).then(({data})=>{setPostsDetails(data)})
    }, [comments]);


    return (
        <div>
            {
                postsDetails.map((postDetails, value) => <PostDetails key={value} postDetails={postDetails}/>)
            }
        </div>
    );
}

export {PostsDetails};