import {axiosService} from "./axios.service";
import {urls} from "../config";


const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getPostCommentsById: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
};


export {postsService};