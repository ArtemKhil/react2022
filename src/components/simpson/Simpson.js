import React from 'react';

function Simpson(props) {

    let {simpson} = props;

    return (
        <>

            <h2>{simpson.name} {simpson.surname}</h2>
            <div>{simpson.age}</div>
            <div>{simpson.info}</div>
            <img src={simpson.photo} alt="simpson member"/>

        </>
    );
}

export default Simpson;