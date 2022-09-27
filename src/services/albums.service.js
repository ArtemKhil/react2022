import {axiosService} from "./axios.service";

import {urls} from "../config/urls";


const albumsService = {
    getAll: () => axiosService.get(urls.albums)

};


export {albumsService};