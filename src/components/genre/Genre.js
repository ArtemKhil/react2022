import React from 'react';
import {Link} from "react-router-dom";

import css from './Genre.module.css';


function Genre({genre}) {

    const {id, name} = genre;

    return (

        <div className={css.container}>
            <div className={css.wrap}>
                <Link to={genre.id.toString()}>{name}</Link>
            </div>
        </div>
    );
}

export {Genre};