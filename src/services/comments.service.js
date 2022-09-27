import {axiosService} from "./axios.service";

import {urls} from "../config/urls";



const commentsService = {
    getAll: () => axiosService.get(urls.comments)
};


export {commentsService};