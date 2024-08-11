import axios from "axios";
const BACKEND_API_HOST = process.env.REACT_APP_BACKEND_API_HOST;
const API_URL = `${BACKEND_API_HOST}/api/user`;

class AuthService {
  getUserProfile(_id) {
    return axios.get(API_URL + "/userProfile/" + _id);
  }

  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, password) {
    return axios.post(API_URL + "/register", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  googleLogin(access_token) {
    return axios.post(API_URL + "/google/token", {
      access_token,
    });
  }

  facebookLogin(access_token) {
    return axios.post(API_URL + "/facebook/token", {
      access_token,
    });
  }
}

export default new AuthService();
