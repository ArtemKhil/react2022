import React from 'react';

function User(props) {

    let {user} = props;

    return (
        <>

            <div className={'title'}>
                <h2>{user.id}. {user.name}</h2>
                <button className={'title_btn'}>Click me</button>
            </div>

            <div className={'details'}>
                <div>{user.email}</div>
                <div>{user.address.city} {user.address.zipcode}</div>
                <div>{user.company.name}</div>
                <div>{user.phone}</div>
            </div>

        </>
    );
}

export default User;