import {axiosService} from "./axios.servive";
import {urls} from "../configs";


const moviesService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`)
};


export {moviesService};