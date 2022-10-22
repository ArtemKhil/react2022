import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import {genreActions} from "../../redux";
import {GenreDetail} from "../genre.detail/GenreDetail";
import css from './GenreDetails.module.css';


function GenreDetails() {

    const {moviesByGenre, prev, next} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(genreActions.getMoviesByGenreId({id, page: query.get('page')}));

    }, [id, query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };


    return (
        <div>

            {
                moviesByGenre.map(movieByGenre => <GenreDetail key={movieByGenre.id} movieByGenre={movieByGenre}/>)
            }

            <div className={css.button}>
                <button disabled={query.get('page')==='1'} onClick={prevPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>

        </div>
    );
}

export {GenreDetails};