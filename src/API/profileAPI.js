import { instance } from "./instance";

export const profileAPI = {
    getAuthInfo() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data);
    },
}

