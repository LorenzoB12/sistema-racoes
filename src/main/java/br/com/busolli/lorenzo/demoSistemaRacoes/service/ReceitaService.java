package br.com.busolli.lorenzo.demoSistemaRacoes.service;

import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.Datatables;
import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.DatatablesColunas;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.EditarIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.CadastroReceitaDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.EditarReceitaDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Receita;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.ReceitaIngredienteRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.ReceitaRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.Optional;

@Service
public class ReceitaService {
    @Autowired
    private ReceitaRepository repo;
    @Autowired
    private ReceitaIngredienteRepository receitaIngredienteRepo;
    @Autowired
    private UsuarioRepository usuarioRepo;
    @Autowired
    private Datatables datatables;

    @Transactional(readOnly = false)
    public Long cadastrarReceita(CadastroReceitaDTO dto) {
        Usuario usuario = usuarioRepo.findById(dto.codUsuarioInclusao()).get();
        Receita receita = new Receita(dto, usuario);
        repo.save(receita);
        return receita.getCodReceita();
    }

    @Transactional(readOnly = true)
    public Map<String, Object> buscarReceitas(HttpServletRequest request){
        datatables.setRequest(request);
        datatables.setColunas(DatatablesColunas.RECEITA);
        Page<Receita> page = repo.findAll(datatables.getPageable());
        return datatables.getResponse(page);
    }

    @Transactional(readOnly = false)
    public void atualizarReceita(EditarReceitaDTO dto) {
        Receita receita = buscarReceitaPorId(dto.codReceita()).orElseThrow(); //dto.codReceita()).orElseThrow();
        receita.atualizarReceita(dto);
        repo.save(receita);
    }

    @Transactional(readOnly = false)
    public void excluirReceita(Long id) {
        receitaIngredienteRepo.deleteAll(receitaIngredienteRepo.findAllByCodReceita(id));
        repo.delete(buscarReceitaPorId(id).get());
    }

    @Transactional(readOnly = true)
    private Optional<Receita> buscarReceitaPorId(Long id){
        return repo.findById(id);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> buscarReceitasPorId(Long codReceita, HttpServletRequest request){
        datatables.setRequest(request);
        datatables.setColunas(DatatablesColunas.RECEITA);
        Page<Receita> page = repo.findById(codReceita, datatables.getPageable());
        return datatables.getResponse(page);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> buscarReceitasPorDescricao(String desReceita, HttpServletRequest request){
        datatables.setRequest(request);
        datatables.setColunas(DatatablesColunas.RECEITA);
        Page<Receita> page = repo.findByDesReceita(desReceita, datatables.getPageable());
        return datatables.getResponse(page);
    }
}
