import * as axios from "axios"

let instance = axios.create({
    withCredentials: true,
    headers : { "API-KEY" :"17ce7864-7abb-4461-acc2-1f1b971290ad"},
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    responseType: "json"
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data;           
    });
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then((response) => {
            return response.data
        });
    },
    postAuth(data) {
        return instance.post(`/auth/login`, data)
    },
    deleteAuth() {
        return instance.delete(`/auth/login`)
    }

}

export const followAPI = {
    postUser(id) {
        return instance.post(`follow/${id}`, {})
        .then((response) => {
            return response.data
        });
    },
    deleteUser(id) {
        return instance.delete(`follow/${id}`)
        .then((response) => {
            return response.data
        });
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/` + id)
        .then((response) => {
            return response.data
        });
    },
    getStatust(id) {
        return instance.get(`profile/status/` + id)
        .then((response) => {
            return response.data
        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status : status})
    }

}

