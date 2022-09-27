import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const postsService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
};


export {postsService};