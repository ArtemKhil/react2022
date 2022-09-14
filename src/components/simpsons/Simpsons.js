import React from 'react';

import {simpsonsArray} from "../../arrays/simpsons_array";
import Simpson from "../simpson/Simpson";

function Simpsons() {

    return (
        <div>

            {
                simpsonsArray.map((simpson, index) => (<Simpson simpson={simpson} key={index}/>))
            }

        </div>
    );
}

export default Simpsons;