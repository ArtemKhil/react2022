import {axiosService} from "./axios.service";
import {urls} from "../config";


const todosService = {
    getAll: () => axiosService.get(urls.todos)
};


export {todosService};