import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../post.details/PostDetails";

function PostsDetails() {

    const {comments} = useParams();
    const [postsDetails, setPostsDetails] = useState([]);


    useEffect(() => {
        postService.getPostComments(comments).then(({data}) => setPostsDetails(data))
    }, [comments]);


    return (
        <div>
            {
                postsDetails.map((postDetails, index) => <PostDetails postDetails={postDetails} key={index}/>)
            }

        </div>
    );
}

export {PostsDetails};