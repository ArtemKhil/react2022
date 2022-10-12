import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';

function Header() {

    return (

        <div className={css.header}>
            <div><Link to={'characters'}>Characters</Link></div>
            <div><Link to={'locations'}>Locations</Link></div>
            <div><Link to={'episodes'}>Episodes</Link></div>
        </div>
    );
}

export {Header};