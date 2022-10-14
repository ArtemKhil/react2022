import React from 'react';

import css from './Character.module.css';

function Character({character}) {


    return (

        <div>

            <div >
                <div className={css.container}>
                    <h3>{character.name}</h3>
                    <h4>{character.location.name}</h4>
                    <img src={character.image} alt="character image"/>
                    <button>More details</button>
                </div>

            </div>

        </div>
    );
}

export {Character};