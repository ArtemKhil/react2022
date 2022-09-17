import React from 'react';

function User(props) {

    let {user, showUser} = props;

    return (
        <>
            <div className={'wrap'}>

                <h2>{user.id}. {user.name}</h2>

                <button onClick={() => {
                    showUser(user)
                }} className={'user_btn'}>Show details
                </button>

            </div>

        </>
    );
}

export default User;