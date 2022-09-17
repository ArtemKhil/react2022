import React, {useEffect, useState} from 'react';

import {getAllLaunches} from "../../services/launch.service";
import Launch from "../launch/Launch";

function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getAllLaunches().then(value => setLaunches(value))
    }, []);

    return (

        <div>
            {
                launches.filter(({launch_year}) => launch_year !== '2020')
                    .map((launch, index) => (<Launch launch={launch} key={index}/>))
            }
        </div>
    );
}

export default Launches;