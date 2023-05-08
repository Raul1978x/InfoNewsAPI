import { API_NOTICIA } from "../constants/Api.noticias";
import { HTTP, PUBLIC_REQUEST, TOKEN_REQUEST } from "../constants/Constants";
import { httpReq } from "./Interceptor.service";

class UserService {
  async register(userData) {
    const response = await fetch(
      API_NOTICIA.USER_REGISTER(),
      PUBLIC_REQUEST(HTTP.POST, userData)
    );
    return httpReq(response);
  }

  async edit(userData) {
    const response = await fetch(
      API_NOTICIA.USER_REGISTER(),
      TOKEN_REQUEST(HTTP.PATCH, true, userData)
    );
    return response.json();
  }

  async getAllUsers() {
    const response = await fetch(
      API_NOTICIA.USER_GET_ALL(),
      TOKEN_REQUEST(HTTP.GET, true)
    );
    return response.json();
  }
}

export default new UserService();
