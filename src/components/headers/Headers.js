import React from 'react';
import {Link} from "react-router-dom";

import css from './Headers.module.css';

function Headers() {
    return (
        <div>

           <div className={css.menu}>
               <h2>Menu</h2>
           </div>
            <div className={css.link}>
                <div><Link to={'/todos'}>All Todos</Link></div>
                <div><Link to={'/albums'}>All Albums</Link></div>
                <div><Link to={'/comments'}>All Comments</Link></div>
                <div><Link to={'/posts'}>All Posts</Link></div>
            </div>
        </div>
    );
}

export {Headers};