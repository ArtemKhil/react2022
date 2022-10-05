import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';


function Header() {

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div className={css.header_buttons}>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
}

export {Header};