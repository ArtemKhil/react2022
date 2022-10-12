import {axiosService} from "./axios.service";
import {urls} from "../configs";

const episodesService = {
    getAll: () => axiosService.get(urls.episodes)
};


export {episodesService};