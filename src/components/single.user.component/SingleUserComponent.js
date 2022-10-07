import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {LOAD_SINGLE_USER} from "../../redux";
import {SingleUserDetails} from "../single.user.details/SingleUserDetails";

function SingleUserComponent() {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {

        dispatch({type:LOAD_SINGLE_USER, payload: +id})

    }, [id]);


    return (
        <div>
            {
                user && (<SingleUserDetails user={user}/>)
            }
        </div>
    );
}

export {SingleUserComponent};