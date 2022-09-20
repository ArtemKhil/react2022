import React from 'react';



function User(props) {

    let {user:{id,name}} = props;

    return (
        <>
         <div className={'wrap'}>

             <h2>{id}.{name}</h2>

             <button onClick={()=>{}}>Posts</button>

         </div>
        </>
    );
}

export {User};
