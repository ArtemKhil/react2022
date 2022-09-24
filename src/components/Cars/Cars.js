import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import {Car} from "../Car/Car";

function Cars() {

    let [cars, setCars] = useState([]);
    const [carForUpdate,setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);


    return (

        <div>

            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {
                cars.map((car, index) => <Car key={index} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)
            }

        </div>
    );
}

export {Cars};