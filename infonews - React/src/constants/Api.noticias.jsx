// Va a tener los datos necesarios para comunicarnos con una api
export const API_NOTICIA = {
  URL: "http://localhost:8080/api",
  NOTICIAS: function () {
    return `${this.URL}/noticias`;
  },

  NOTICIAS_BY_ID: function (id) {
    return `${this.URL}/noticias/${id}`;
  },
};
