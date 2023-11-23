package br.com.busolli.lorenzo.demoSistemaRacoes.service;

import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.Datatables;
import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.DatatablesColunas;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.CadastroIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.EditarIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.IngredienteRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class IngredienteService {
    @Autowired
    private IngredienteRepository repo;
    @Autowired
    private Datatables datatables;

    @Transactional(readOnly = false)
    public Long cadastrarIngrediente(CadastroIngredienteDTO dto){
        Ingrediente ingrediente = new Ingrediente(dto);
        repo.save(ingrediente);
        return ingrediente.getCodIngrediente();
    }

    @Transactional(readOnly = true)
    public Map<String, Object> buscarIngredientesAtivos(HttpServletRequest request){
        datatables.setRequest(request);
        datatables.setColunas(DatatablesColunas.INGREDIENTE);
        Page<Ingrediente> page = repo.findAllByIndAtivoTrue(datatables.getPageable());
        return datatables.getResponse(page);
    }

    @Transactional(readOnly = true)
    public List<Ingrediente> buscarIngredientesAtivos(){

        return repo.findAllByIndAtivoTrue();
    }

    @Transactional(readOnly = false)
    public void inativarIngrediente(Long id) {

        repo.findById(id).get().setIndAtivo(Boolean.FALSE);
    }

    @Transactional(readOnly = false)
    public void atualizarIngrediente(EditarIngredienteDTO dto){
        Ingrediente ingrediente = buscarIngredientePorId(dto.codIngrediente()).orElseThrow();
        ingrediente.atualizarIngrediente(dto);
        repo.save(ingrediente);
    }

    @Transactional(readOnly = true)
    private Optional<Ingrediente> buscarIngredientePorId(Long id){

        return repo.findById(id);
    }
}
