import * as axios from "axios";
import io from 'socket.io-client'


const token = localStorage.getItem("user");

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "17ce7864-7abb-4461-acc2-1f1b971290ad",
    token: token,
  },
  baseURL: "http://192.168.0.104:8000/",
  responseType: "json",
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    return await instance.get(`profile/users?page=${currentPage}&count=${pageSize}`);
  },
};

export const authAPI = {
  async getAuth() {
    return await instance.get(`auth/me`);
  },
  async postAuth(data) {
    return await instance.post(`/auth/login`, data);
  },
  async deleteAuth() {
    return await instance.delete(`/auth/login`);
  },
  async registration(data) {
    return await instance.post(`auth/reg`, data);
  },
};

export const profileAPI = {
  async getUserProfile(id) {
    return await instance.get(`profile/` + id);
  },
  async updateStatus(status) {
    return await instance.put(`profile/status`, { status: status });
  },
  async dispachPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return await instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  async dispachProfileInfo(profile) {
    return await instance.put(`profile`, profile);
  },
  async postUser(id) {
    return await instance.post(`profile/follow/${id}`, {});
  },
  async deleteUser(id) {
    return await instance.delete(`profile/follow/${id}`);
  },
  async getPosts(id) {
    return await instance.get(`profile/posts/${id}`);
  },
  async addPost(data) {
    return await instance.post(`profile/post`, data);
  },
  async deletePost(id) {
    return await instance.delete(`profile/post/${id}`);
  },
  async changePost(id, data) {
    return await instance.put(`profile/post/${id}`, data);
  },
};

export const ChatsAPI = {
  async getChats() {
    return await instance.get(`chats`);
  },
  async getMessages(id, count) {
    return await instance.get(`chats?room=${id}&count=${count}`);
  },
  async sendMessage(message, userId, room) {
    const socket = io('ws://192.168.0.104:8000/')
    return socket.emit("sendMessage", {
      message,
      userId,
      room
    })
  }
};

export const securityAPI = {
  async getCaptchaURL() {
    return await instance.get(`security/get-captcha-url`);
  },
};
