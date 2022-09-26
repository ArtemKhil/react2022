import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";

function PostDetails() {

    const {id} = useParams();
    const [postDetails,setPostDetails] = useState([]);


    useEffect((id) => {
        postService.getPostComments(id).then(({data})=>setPostDetails(data))
    }, [id]);


    return (
        <div>
            {
                JSON.stringify(postDetails)
            }
        </div>
    );
}

export  {PostDetails};