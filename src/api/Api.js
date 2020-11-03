import * as axios from "axios"
import { savePhoto } from "../Redux/profile-reducer";

let instance = axios.create({
    withCredentials: true,
    headers : { "API-KEY" :"17ce7864-7abb-4461-acc2-1f1b971290ad"},
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    responseType: "json"
})

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data;           
    }
}

export const authAPI = {
    async getAuth() {
        let response = await instance.get(`auth/me`)
        return response.data
        
    },
    postAuth(data) {
        return instance.post(`/auth/login`, data)
    },
    deleteAuth() {
        return instance.delete(`/auth/login`)
    }

}

export const followAPI = {
    async postUser(id) {
        let response = await instance.post(`follow/${id}`, {})
        return response.data
        
    },
    async deleteUser(id) {
        let response = await instance.delete(`follow/${id}`)
        return response.data
    }
}

export const profileAPI = {
    async getUserProfile(id) {
        let response = await instance.get(`profile/` + id)
        return response.data
    },
    async getStatust(id) {
        let response = await instance.get(`profile/status/` + id)
        return response.data
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status : status})
    },
    async dispachPhoto(photo) {
        let formData = new FormData
        formData.append("image", photo)
        let response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    },
    async dispachProfileInfo(profile) {
        let response = await instance.put(`profile`, profile)
        return response
    }

}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)    
    }
} 

