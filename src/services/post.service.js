import {axiosService} from "./axios.service";
import {urls} from "../configs";


const postService = {

    getAll: axiosService.get(urls.posts),
    getPostsById: (id) => axiosService.get(`urls.users/${id}/posts`)

};

export {postService};