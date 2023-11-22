package br.com.busolli.lorenzo.demoSistemaRacoes.controller.RESTController;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.CadastroIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.EditarIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.service.IngredienteService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class IngredienteRestController {
    @Autowired
    private IngredienteService service;

    @PostMapping("ingrediente/cadastrar")
    public ResponseEntity<?> cadastrarIngrediente(@RequestBody @Valid CadastroIngredienteDTO dto){
        Long id = service.cadastrarIngrediente(dto);
        return ResponseEntity.ok(id);
    }

    @GetMapping("ingrediente/listar")
    public ResponseEntity<?> listarIngredientes(HttpServletRequest request){

        return ResponseEntity.ok(service.buscarIngredientesAtivos(request));
    }

    @PutMapping("ingrediente/editar")
    public ResponseEntity<?> editarIngrediente(@RequestBody @Valid EditarIngredienteDTO dto){
        service.atualizarIngrediente(dto);
        return ResponseEntity.ok(dto.codIngrediente());
    }

    @DeleteMapping("ingrediente/excluir/{id}")
    public ResponseEntity<?> excluirIngrediente(@PathVariable("id") Long id){
        service.inativarIngrediente(id);
        return ResponseEntity.ok(id);
    }
}
