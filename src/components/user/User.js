import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from './User.module.css';

function User({user}) {

    const {id, name} = user

    const dispatch = useDispatch();


    return (
        <div className={css.main}>

            <div className={css.user}>
                <h3>{id}.{name}</h3>
            </div>

            <div className={css.buttons}>
                <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Get User</button>
                <button onClick={() => dispatch(userActions.getById({id}))}>Get asyncUser</button>
                <button onClick={() => dispatch(userActions.deleteById({id}))}>Delete User</button>
            </div>


        </div>
    );
}

export {User};