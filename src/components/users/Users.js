import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../user/User";
import css from './Users.module.css';

function Users() {

    const dispatch = useDispatch();

    const {users, error, loading, getAsyncUser} = useSelector(state => state.userReducer);

    const {currentUser} = useSelector(state => state.userReducer);


    useEffect(() => {

        dispatch(userActions.getAll());

    }, []);


    return (
        <div>
            {loading && <h1>Wait please)</h1>}
            {error && <h1>Error</h1>}

            <div className={css.info}>
                <h2>{getAsyncUser && getAsyncUser.username}</h2>
                <h2>{currentUser && currentUser.email}</h2>
            </div>

            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users};