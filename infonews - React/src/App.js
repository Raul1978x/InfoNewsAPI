import Footer from "./components/public/Footer";
import NavbarApp from "./components/public/NavbarApp";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/public/Cards";
import FormUsuario from "./components/public/FormUsuario";
import FormEditUsuario from "./components/public/FormEditUsuario";
import Login from "./components/public/Login";
import ListaUsuarios from "./components/public/ListaUsuarios";
import FormNoticia from "./components/public/FormNoticia";
import FormEditNoticia from "./components/public/FormEditNoticia";
function App() {
  return (
    <div className="App bg-dark">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Cards />} />
        {/* <Route path="/" element={<Usuario />} /> */}
        <Route path="/form-usuario" element={<FormUsuario />} />
        <Route path="/form-noticia" element={<FormNoticia />} />
        <Route
          path="/form-edit-noticia/:id"
          element={({match}) => <FormEditNoticia id={match.params.id} />}
        />
        <Route path="/form-edit-usuario" element={<FormEditUsuario />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
