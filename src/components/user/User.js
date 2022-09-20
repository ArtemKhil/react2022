import React from 'react';


function User(props) {

    let {user, getPosts} = props;

    return (
        <>
            <div className={'wrap'}>

                <h2>{user.id}.{user.name}</h2>

                <button onClick={() => {
                    getPosts(user.id)
                }}>Posts
                </button>

            </div>
        </>
    );
}

export {User};
