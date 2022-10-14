import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux";

function Car({car}) {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();


    return (

        <div className={css.wrap}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>

            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
        </div>

    );
}

export {Car};