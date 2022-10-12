import {axiosService} from "./axios.service";
import {urls} from "../configs";

const locationsService = {
    getAll: () => axiosService.get(urls.locations)
};


export {locationsService};