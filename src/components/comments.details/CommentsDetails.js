import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../services";
import {CommentDetails} from "../comment.details/CommentDetails";

function CommentsDetails() {

    const {postId} = useParams();

    const [commentsDetails,setCommentsDetails] = useState([]);

    useEffect(() => {
        commentsService.getCommentPostById(postId).then(({data})=>{setCommentsDetails(data)})
    }, [postId]);

    return (
        <div>
            {
                commentsDetails.map((commentDetails,index)=><CommentDetails key={index} commentDetails={commentDetails}/>)
            }
        </div>
    );
}

export {CommentsDetails};