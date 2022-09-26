import {axiosService} from "./axios.service";
import {urls} from "../configs";


const postService = {

    getAll: () => axiosService.get(urls.posts),
    getPostComments: (id)=> axiosService.get(`urls.posts/${id}/comments`)

};


export {postService};