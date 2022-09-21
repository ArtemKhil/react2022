import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);


    return (

        <div>

            <CarForm setCars={setCars}/>
            <hr/>
            {
                cars.map((car, index) => <Car key={index} car={car} setCars={setCars}/>)
            }

        </div>
    );
}

export {Cars};