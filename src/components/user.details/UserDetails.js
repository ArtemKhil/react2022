import React from 'react';

function UserDetails({userDetails}) {
    return (
        <div>
            <h2>{userDetails.email}</h2>
            <h2>{userDetails.username}</h2>
            <h2>{userDetails.company.name}</h2>
        </div>
    );
}

export {UserDetails};