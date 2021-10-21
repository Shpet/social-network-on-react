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
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        // status: status  === status
        return instance.put(`profile/status`, { status });
    }
}

