import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";
import {LOAD_COMMENTS} from "../../redux";

function Comments() {

    const {comments} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data})=>dispatch({type:LOAD_COMMENTS, payload: data}))
    }, []);


    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export {Comments};