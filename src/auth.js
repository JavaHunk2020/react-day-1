import axios from "./api.service";

class AuthApi {

  static Login = (data) => {
    return axios.post(`auth`, data);
  };

  // don't forget to add the register and logout methods
}

export default AuthApi;