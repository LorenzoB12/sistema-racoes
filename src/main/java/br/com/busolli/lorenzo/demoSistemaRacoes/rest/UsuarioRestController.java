package br.com.busolli.lorenzo.demoSistemaRacoes.rest;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.usuario.CadastroUsuarioDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import br.com.busolli.lorenzo.demoSistemaRacoes.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsuarioRestController {
    @Autowired
    private UsuarioService service;

    @PostMapping("/usuario/cadastrar")
    public ResponseEntity<?> cadastrarUsuario(@RequestBody @Valid CadastroUsuarioDTO usuario){
        if(!service.cadastrarUsuario(usuario)){
            return ResponseEntity.badRequest().body("Nome de usuário já cadastrado!");
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/usuario/listar")
    public ResponseEntity<?> listarUsuarios(){

        return ResponseEntity.ok(service.listarUsuarios());
    }

    @PutMapping("/usuario/editar")
    public ResponseEntity<?> editarUsuario(@RequestBody Usuario usuario){
        service.editarUsuario(usuario);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/usuario/excluir/{id}")
    public ResponseEntity<?> excluirUsuario(@PathVariable Long id){
        service.excluirUsuario(id);
        return ResponseEntity.noContent().build();
    }
}
