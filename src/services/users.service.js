import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


const usersService = {
    getAll: () => axiosService.get(urls.users)

};

export {usersService};
