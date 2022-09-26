import React, {useEffect, useState} from 'react';
import {commentService} from "../../services";
import {Comment} from "../comment/Comment";

function Comments() {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data})=> setComments(data))
    }, []);


    return (
        <div>
            {
                comments.map((comment, index) => <Comment key={index} comment={comment}/>)
            }
        </div>
    );
}

export {Comments};