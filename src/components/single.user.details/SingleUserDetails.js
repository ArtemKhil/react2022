import React from 'react';

function SingleUserDetails({user}) {
    return (
        <div>
            {user.username}--{user.email}
        </div>
    );
}

export {SingleUserDetails};