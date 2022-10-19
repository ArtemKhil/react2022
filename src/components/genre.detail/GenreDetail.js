import React from 'react';

import css from './GenreDetail.module.css';


function GenreDetail({movieByGenre}) {

    const {original_title, backdrop_path} = movieByGenre;

    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <h2>{original_title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie poster"/>
            </div>
        </div>
    );
}

export {GenreDetail};