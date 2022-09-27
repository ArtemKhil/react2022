import React from 'react';

import css from './Album.module.css';

function Album({album}) {
    return (
        <div className={css.album}>
            <h3>{album.id}.{album.title}</h3>
        </div>
    );
}

export {Album};