import { instance } from "./instance";

export const usersAPI = {
    async getUsers(currentPage) {
        const response = await instance.get(`users?count=12&page=${currentPage}`);
        return response.data;
    },
    async unfollow(id) {
        const response = await instance.delete(`follow/${id}`);
        return response.data;
    },
    async follow(id) {
        const response = await instance.post(`follow/${id}`);
        return response.data;
    }
}

