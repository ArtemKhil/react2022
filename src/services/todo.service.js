import {axiosService} from "./axios.service";
import {urls} from "../configs";


const todoService = {
    getAll: () => axiosService.get(urls.todos)
};

export {todoService};
