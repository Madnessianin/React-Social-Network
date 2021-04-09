import * as axios from "axios";

let instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "17ce7864-7abb-4461-acc2-1f1b971290ad" },
  baseURL: "http://192.168.0.104:8000/",
  responseType: "json",
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    return await instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
};

export const authAPI = {
  async getAuth() {
    return await instance.get(`auth/me`);
  },
  postAuth(data) {
    return instance.post(`/auth/login`, data);
  },
  deleteAuth() {
    return instance.delete(`/auth/login`);
  },
};

export const profileAPI = {
  async getUserProfile(id) {
    return await instance.get(`profile/` + id);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  async dispachPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    const response = await instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
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

export const securityAPI = {
  getCaptchaURL() {
    return instance.get(`security/get-captcha-url`);
  },
};
