export const API_USUARIOS = {
  URL: "http://localhost:8080/admin",
  USUARIOS: function () {
    return "${this.URL}/usuarios";
  },
  USUARIOS_BY_ID: (id) => {
    return `${this.URL}/mostrarUsuario/${id}`;
  },
  USUARIOS_BY_EMAIL: (email) => {
    return `${this.URL}/mostrarUsuario/${email}`;
  },
};
