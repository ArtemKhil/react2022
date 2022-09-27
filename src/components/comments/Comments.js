import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";


function Comments() {

    const [comments,setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data})=>{setComments(data)})
    }, []);


    return (
        <div>
            {
                comments.map((comment,index)=><Comment key={index} comment={comment}/>)
            }
        </div>
    );
}

export{Comments};