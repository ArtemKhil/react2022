import React from 'react';
import {Link} from "react-router-dom";

function Headers() {
    return (
        <div>

           <div>
               <h2>Menu</h2>
           </div>
            <div>
                <div><Link to={'/todos'}>All Todos</Link></div>
                <div><Link to={'/albums'}>All Albums</Link></div>
                <div><Link to={'/comments'}>All Comments</Link></div>
                <div><Link to={'/posts'}>All Posts</Link></div>
            </div>
        </div>
    );
}

export {Headers};