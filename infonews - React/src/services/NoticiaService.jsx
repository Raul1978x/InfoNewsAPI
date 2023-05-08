import { API_NOTICIA } from "../constants/Api.noticias";
// import httpReq from "./Interceptor.service";
import axios from "axios";

class NoticiaService {
  async getAllNews() {
    const response = await axios.get(API_NOTICIA.NOTICIAS());
    //Interceptor
    // console.log(response);
    <httpReq />;
    return response.json();
  }
  async getNewsById(id) {
    const response = await axios(API_NOTICIA.NOTICIAS_BY_ID(id));
    //Interceptor
    // <httpReq />;
    return response.json();
  }
}

export default new NoticiaService();
