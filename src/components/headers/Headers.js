import React from 'react';
import {Link} from "react-router-dom";

function Headers() {
    return (
        <div>
            <h2>JSONplaceholder MENU</h2>
            <div>
                <div><Link to={'users'}>Get All Users</Link></div>
                <div><Link to={'todos'}>Get All Todos</Link></div>
                <div><Link to={'posts'}>Get All Posts</Link></div>
                <div><Link to={'comments'}>Get All Comments</Link></div>
            </div>
        </div>
    );
}

export {Headers};