import React from 'react';

function User({user}) {

    let {id,name,username,email} = user;

    return (
        <div>

            <h2>{id}.{name}--{username}</h2>
            <h3>{email}</h3>

        </div>
    );
}

export {User};