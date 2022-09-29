import React from 'react';
import {Link} from "react-router-dom";

function User({user}) {
    return (
        <div>
            <h3>{user.id}.{user.name}</h3>
            <span><Link to={user.id.toString()}>User Details</Link></span>
        </div>
    );
}

export {User};