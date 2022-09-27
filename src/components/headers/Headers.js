import React from 'react';
import {Link} from "react-router-dom";

import css from './Headers.module.css';

function Headers() {
    return (
        <div>

            <div className={css.menu}>
                <h3>Menu</h3>
            </div>
            <div className={css.links}>
                <div><Link to={'albums'}>Albums</Link></div>
                <div><Link to={'comments'}>Comments</Link></div>
                <div><Link to={'todos'}>Todos</Link></div>
            </div>

        </div>
    );
}

export {Headers};