import {axiosService} from "./axios.service";
import {urls} from "../config";


const usersService = {
    getAll: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`)
};


export {usersService};