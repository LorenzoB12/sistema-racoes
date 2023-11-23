package br.com.busolli.lorenzo.demoSistemaRacoes.rest;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.CadastroIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.EditarIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.CadastroReceitaDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.EditarReceitaDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.service.ReceitaService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReceitaRestController {

    @Autowired
    private ReceitaService service;

    @PostMapping("receita/cadastrar")
    public ResponseEntity<?> cadastrarReceita(@RequestBody @Valid CadastroReceitaDTO dto){
        Long id = service.cadastrarReceita(dto);
        return ResponseEntity.ok(id);
    }

    @PutMapping("receita/editar")
    public ResponseEntity<?> editarReceita(@RequestBody @Valid EditarReceitaDTO dto){
        service.atualizarReceita(dto);
        return ResponseEntity.ok(dto.codReceita());
    }

    @DeleteMapping("receita/excluir/{id}")
    public ResponseEntity<?> excluirReceita(@PathVariable("id") Long id){
        service.excluirReceita(id);
        return ResponseEntity.ok(id);
    }

    @GetMapping("receita/listar")
    public ResponseEntity<?> listarReceitas(HttpServletRequest request){

        return ResponseEntity.ok(service.buscarReceitas(request));
    }

    @GetMapping("receita/listarCodReceita/{id}")
    public ResponseEntity<?> listarReceitasCodReceita(@PathVariable("id") Long codReceita, HttpServletRequest request){

        return ResponseEntity.ok(service.buscarReceitasPorId(codReceita, request));
    }

    @GetMapping("receita/listarDesReceita/{des}")
    public ResponseEntity<?> listarReceitasDesReceita(@PathVariable("des") String desReceita, HttpServletRequest request){

        return ResponseEntity.ok(service.buscarReceitasPorDescricao(desReceita, request));
    }
}
