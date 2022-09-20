import {axiosService} from "./axios.service";


const userService = {

    getAll: axiosService.get(`/users`),

    getUserById: (id) => {
        return axiosService.get(`/users/${id}`)
    },

    getUserPostsById: (id) => {
        return axiosService.get(`/users/${id}/posts`)
    }

}


export {userService};