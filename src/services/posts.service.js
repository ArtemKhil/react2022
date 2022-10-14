import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getCommentsByPostId: (id) => axiosService(`${urls.posts}/${id}/comments`),
    deleteById: (id) => axiosService.delete(`${urls.posts}/${id}`)
};

export {postsService};