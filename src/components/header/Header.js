import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';

function Header() {

    return (
        <div className={css.Header}>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
        </div>
    );
}

export {Header};