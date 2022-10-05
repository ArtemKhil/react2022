import React, {useEffect, useState} from 'react';

import {CarForm, Cars} from "../../components";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";


function CarsPage() {

    const [cars, setCars] = useState([]);

    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data: response}) => {
            setCars(response.data)
            setPrev(response.prev)
            setNext(response.next)
        })
    }, [query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };


    return (
        <div>

            <CarForm/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>

        </div>
    );
}

export {CarsPage};