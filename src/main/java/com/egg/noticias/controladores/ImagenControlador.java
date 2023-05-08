package com.egg.noticias.controladores;

import com.egg.noticias.entidades.Imagen;
import com.egg.noticias.entidades.Noticia;
import com.egg.noticias.entidades.Usuario;
import com.egg.noticias.excepciones.MiExcepcion;
import com.egg.noticias.servicios.ImagenServicio;
import com.egg.noticias.servicios.NoticiaServicio;
import com.egg.noticias.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Raúl Gómez
 */
@RestController
@RequestMapping("/imagen")
public class ImagenControlador {
    @Autowired
    private ImagenServicio imagenServicio;

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> imagenNoticia(@PathVariable String id) {
        Imagen imagen = imagenServicio.buscarImagenById(id);

        byte[] data = imagen.getContenido();

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<>(data, headers, HttpStatus.OK);
    }

    @PostMapping("")
    public void cargarImagen(@RequestParam MultipartFile archivo) throws MiExcepcion {
        imagenServicio.guardar(archivo);
    }

    @DeleteMapping("/{id}")
    public void borrarimagenById(@PathVariable String id){
        imagenServicio.deleteById(id);
    }
}
