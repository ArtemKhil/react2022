import React, {useEffect, useState} from 'react';

import {albumService} from "../../services";
import {Album} from "../album/Album";

function Albums() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(({data})=>setAlbums(data))
    }, []);


    return (
        <div>
            {
                albums.map((album,index)=><Album key={index} album={album}/>)
            }
        </div>
    );
}

export {Albums};