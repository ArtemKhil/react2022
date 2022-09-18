import React from 'react';

function User(props) {
    let {user} = props;


    return (
        <>
         <div>
             <h2>{user.id}.{user.name}</h2>

             <button>Posts</button>

         </div>


        </>
    );
}

export {User};
