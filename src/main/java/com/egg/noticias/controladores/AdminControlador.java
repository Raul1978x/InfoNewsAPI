package com.egg.noticias.controladores;

import com.egg.noticias.entidades.Noticia;
import com.egg.noticias.entidades.Usuario;
import com.egg.noticias.excepciones.MiExcepcion;
import com.egg.noticias.servicios.BusinessService;
import com.egg.noticias.servicios.NoticiaServicio;
import com.egg.noticias.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminControlador {

    @Autowired
    private NoticiaServicio noticiaServicio;
    @Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping("/dashboard")
    public String homeAdmin(HttpSession session, ModelMap model) {
        model.addAttribute("noticias", noticiaServicio.listarNoticias());
        Usuario logueado = (Usuario) session.getAttribute("usuariosession");
        model.addAttribute("logueado", logueado.getNombre());
        return "mostrar_admin";
    }

    @GetMapping("/noticias")
    public ResponseEntity<List<Noticia>> listarNoticias() {
        return ResponseEntity.ok(noticiaServicio.listarNoticias());
    }

    @PostMapping("/noticias")
    public void cargarNoticia(@RequestParam MultipartFile archivo,
                              @RequestParam String titulo, @RequestParam String cuerpo,
                              @RequestParam String bajada)
            throws MiExcepcion {
        try {
            noticiaServicio.crearNoticia(archivo, titulo, cuerpo, bajada);

        } catch (MiExcepcion e) {
            System.out.println(e.getMessage());
        }
    }

    @PutMapping("/noticias/{id}")
    public void editaNoticia(@RequestParam String id, @RequestParam String titulo,
                               @RequestParam String bajada, @RequestParam String cuerpo,
                               MultipartFile archivo) throws MiExcepcion {
        try {
           noticiaServicio.actualizar(archivo, id, titulo, cuerpo, bajada);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @DeleteMapping("/noticias/{id}")
    public void eliminarPorId(@PathVariable String id, ModelMap model) {
        noticiaServicio.eliminarPorId(id);
    }

    @GetMapping("/noticias/{id}")
    public ResponseEntity<Noticia> modificar(@PathVariable String id, HttpSession session, ModelMap model) {
        Noticia noticia = noticiaServicio.buscarNoticiaPorId(id);
        Usuario logueado = (Usuario) session.getAttribute("usuariosession");
        return ResponseEntity.ok(noticia);
    }

    @GetMapping("/usuarios")
    private ResponseEntity<List<Usuario>> listarUsuarios(){
        return ResponseEntity.ok(usuarioServicio.usuarios());
    }

    @GetMapping("/editarUsuario/{id}")
    public String editarUsuario(@PathVariable String id, ModelMap model) throws MiExcepcion {
        Usuario usuario = usuarioServicio.getOne(id);
        model.put("usuario", usuario);
        return "registro_editar";
    }

    @PostMapping("/editaUsuario/{id}")
    public String editaUsuario(@RequestParam MultipartFile archivo, @PathVariable String id,
                               @RequestParam String nombre, @RequestParam String email,
                               @RequestParam String password, @RequestParam String password2,
                               ModelMap model, HttpSession session) throws MiExcepcion {
        usuarioServicio.actualizar(archivo, id, nombre, email, password, password2);
        model.put("exito", "el usuario se actualizo correctamente!!");
        return "redirect:/admin/usuarios";
    }

    @GetMapping("/cambiarRol/{id}")
    public String cambiarRol(@PathVariable String id) {

        usuarioServicio.cambiarRol(id);

        return "redirect:/admin/usuarios";

    }

    @GetMapping("/eliminarUsuario/{id}")
    public String eliminarUsuario(@PathVariable String id) {

        usuarioServicio.eliminarUsuario(id);

        return "redirect:/admin/usuarios";

    }

    @GetMapping("/registrar")
    public String registrar(ModelMap model) {
        return "registro.html";
    }

    @PostMapping("/registro")
    public String registro(@RequestParam MultipartFile archivo,
                           @RequestParam String nombre, @RequestParam String email,
                           @RequestParam String password, @RequestParam String password2,
                           ModelMap model) {
        try {
            usuarioServicio.registrar(archivo, nombre, email, password, password2);
            model.put("exito", "Usuario Registrado");

            return "redirect:/";

        } catch (MiExcepcion ex) {
            model.put("error", ex.getMessage());
            model.put("nombre", nombre);
            model.put("email", email);

            return "registro";
        }
    }

    //    Envio de Email
    @Autowired
    private BusinessService emailService;

    @GetMapping("/enviarEmail/{id}")
    public String sendEmail(@PathVariable String id, HttpSession session, ModelMap modelo) {
        Usuario usuario = usuarioServicio.getOne(id);
        modelo.put("usuario", usuario);
        Usuario logueado = (Usuario) session.getAttribute("usuariosession");
        modelo.addAttribute("logueado", logueado.getNombre());
        return "email";
    }

    @PostMapping("/envioEmail/{id}")
    public String sendEmail2(@RequestParam(required = false) String email, @RequestParam String titulo, @RequestParam String textarea, @PathVariable(required = false) String id, ModelMap modelo) {
        try {
            emailService.sendEmail(email, titulo, textarea, id);
            Usuario usuario = usuarioServicio.getOne(id);
            modelo.put("usuario", usuario);
            System.out.println(usuario.toString());
            modelo.put("exito", "Mail enviado correctamente");
            return "redirect:/admin/usuarios";
        } catch (Exception ex) {
            modelo.put("error", ex.getMessage());
            return "redirect:/admin/enviarEmail/{id}";
        }
    }
}
