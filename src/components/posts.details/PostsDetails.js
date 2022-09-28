import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../post.details/PostDetails";

function PostsDetails() {

    const {id} = useParams();
    const [postDetails,setPostDetails] = useState(null);


    useEffect(() => {
        postService.getPostComments(id).then(({data})=>setPostDetails(data))
    }, [id]);


    return (
        <div>
            {
                postDetails &&(<PostDetails postdetails={postDetails} key={postDetails.id}/>)

            }

        </div>
    );
}

export{PostsDetails};