import {axiosService} from "./axios.service";
import {urls} from "../configs";


const albumService = {
    getAll: () => axiosService.get(urls.albums)
};

export {albumService};