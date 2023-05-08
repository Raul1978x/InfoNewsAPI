/*
package com.egg.noticias.controladores;

import com.egg.noticias.entidades.Usuario;
import com.egg.noticias.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsuarioControlador {

    @Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping("/usuarios")
    private ResponseEntity<List<Usuario>> listarUsuarios(){
        return ResponseEntity.ok(usuarioServicio.usuarios());
    }


}*/
