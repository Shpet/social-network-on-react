import { instance } from "./instance";

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?count=12&page=${currentPage}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}

