import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4b57d7b3-e4cf-450f-accb-fbf0784a5938'
    }
})
