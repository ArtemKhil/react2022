import React from 'react';

function Simpson(props) {

    let {simpson} = props;

    return (
        <>
            <div className={'title'}>
                <h2>{simpson.id}. {simpson.name}</h2>
            </div>

            <div className={'box'}>
                <div>{simpson.status}</div>
                <div>{simpson.species}</div>
                <div>{simpson.gender}</div>
            </div>

            <div className={'image'}>
                <img src={simpson.image} alt="simpson character"/>
            </div>
        </>
    );
}

export default Simpson;