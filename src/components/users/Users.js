import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {User} from "../user/User";
import {LOAD_USERS} from "../../redux";



function Users() {

    const {users} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))
    }, []);


    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users};
