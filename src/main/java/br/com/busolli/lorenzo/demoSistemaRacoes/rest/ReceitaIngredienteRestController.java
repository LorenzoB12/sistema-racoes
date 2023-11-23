package br.com.busolli.lorenzo.demoSistemaRacoes.rest;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.CadastroReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.EditarReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.service.ReceitaIngredienteService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReceitaIngredienteRestController {
    @Autowired
    private ReceitaIngredienteService service;

    @PostMapping("receitaIngrediente/cadastrar")
    public ResponseEntity<?> cadastrarReceitaIngrediente(@RequestBody @Valid CadastroReceitaIngredienteDTO dto){
        Integer numOrdem = service.cadastrarIngredienteReceita(dto);
        return ResponseEntity.ok(numOrdem);
    }

    @GetMapping("receitaIngrediente/listar/{id}")
    public ResponseEntity<?> listarReceitaIngredientes(@PathVariable("id") Long id, HttpServletRequest request){

        return ResponseEntity.ok(service.listarReceitaIngredientesPorReceitaId(id, request));
    }

    @PutMapping("receitaIngrediente/editar")
    public ResponseEntity<?> editarReceitaIngrediente(@RequestBody @Valid EditarReceitaIngredienteDTO dto){
        service.atualizarReceitaIngrediente(dto);
        return ResponseEntity.ok(dto.codReceita());
    }
}

