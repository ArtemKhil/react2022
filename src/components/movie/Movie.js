import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import css from './Movie.module.css';
import {movieActions} from "../../redux";


function Movie({movie}) {

    const {title, backdrop_path, id} = movie;

    const dispatch = useDispatch();


    return (
        <div className={css.movie_container}>

            <div className={css.movie_wrap}>

                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie poster"/>

                <button onClick={() => dispatch(movieActions.getById({id}))}>More Details</button>

                <Link to={`/movie/${id}/details`} state={movie}>
                    <button>Details</button>
                </Link>

            </div>

        </div>
    );
}

export {Movie};