import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

import css from './MovieDetails.module.css';

function MovieDetails() {

    const {id} = useParams();
    const {state} = useLocation();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        if (state) {
            setMovie(state)
        }
    }, [id]);

    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    };


    return (
        <div>
            {
                movie &&
                <div className={css.movie_single_card}>
                    <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title}/>
                    <div className={css.single_movie_overview}>
                        <h1>{movie.title}</h1>
                        <div className={css.movie_overview}>
                            <p>{movie.overview}</p>
                            <p>Release date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average}</p>
                            <button onClick={back}>Back to movies</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export {MovieDetails};

