import {axiosService} from "./axios.service";
import {urls} from "../config";


const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getCommentPostById: (postId) => axiosService.get(`${urls.comments}?postId=${postId}`)
};


export {commentsService};