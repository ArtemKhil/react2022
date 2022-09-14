import React, {useState} from 'react';

import Simpson from "../simpson/Simpson";

function Simpsons() {

    let [simpsons, setSimpsons] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => setSimpsons(value.results));

    return (
        <div>
            {simpsons.map((simpson, index) => (<Simpson simpson={simpson} key={index}/>))}
        </div>
    );
}

export default Simpsons;