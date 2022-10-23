import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Movie} from "../movie/Movie";
import {MovieTitleSearch} from "../movie.title.search/movieTitleSearch";

function SearchbarForm() {

    const {handleSubmit, register, reset} = useForm();

    const {moviesTitle} = useSelector(state => state.movieReducer);


    const dispatch = useDispatch();

    const submit = ({title}) => {
        dispatch(movieActions.getMovieByTitle({title}))
        reset()
    };


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Movie'} {...register('title')}/>
                <button disabled={!register}>Search</button>
            </form>
            {
                moviesTitle.map(movieTitle =><MovieTitleSearch key={movieTitle.id} movieTitle={movieTitle}/>)
            }

        </div>


    );
}

export {SearchbarForm};