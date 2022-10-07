import React from 'react';
import {Link} from "react-router-dom";

function User({user}) {
    return (
        <div>
            <div>
                {user.id}.{user.name}
                <div><Link to={user.id.toString()}>User Details</Link></div>
            </div>
        </div>
    );
}

export {User};