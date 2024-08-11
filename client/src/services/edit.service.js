import axios from "axios";
const BACKEND_API_HOST = process.env.REACT_APP_BACKEND_API_HOST;
const API_URL = `${BACKEND_API_HOST}/api`;

class EditService {
  userEdit(_id, gender) {
    return axios.put(API_URL + "/user/edit", {
      _id,
      gender,
    });
  }
}

export default new EditService();
