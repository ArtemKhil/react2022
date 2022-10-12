import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {characterActions} from "../../redux";
import {Character} from "../character/Character";
import css from './Characters.module.css';

function Characters() {

    const dispatch = useDispatch();

    const {characters, loading, error, prev, next} = useSelector(state => state.characterReducer);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(characterActions.getAll({page: query.get('page')}))

    }, [query]);


    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };


    return (

        <div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error</h2>}

            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }

            <div className={css.buttons}>
                <button disabled={prev} onClick={prevPage}>Previous Page</button>
                <button disabled={next} onClick={nextPage}>Next Page</button>
            </div>

        </div>
    );
}

export {Characters};