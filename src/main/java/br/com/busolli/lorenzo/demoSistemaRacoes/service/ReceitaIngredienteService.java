package br.com.busolli.lorenzo.demoSistemaRacoes.service;

import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.Datatables;
import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.DatatablesColunas;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.CadastroReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.EditarReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Receita;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.ReceitaIngrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.IngredienteRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.ReceitaIngredienteRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.ReceitaRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
public class ReceitaIngredienteService {
    @Autowired
    private ReceitaIngredienteRepository repo;
    @Autowired
    private ReceitaRepository receitaRepo;
    @Autowired
    private IngredienteRepository ingredienteRepo;
    @Autowired
    private UsuarioRepository usuarioRepo;
    @Autowired
    private Datatables datatables;

    @Transactional(readOnly = false)
    public Integer cadastrarIngredienteReceita(CadastroReceitaIngredienteDTO dto){
        Ingrediente ingrediente = ingredienteRepo.findById(dto.codIngrediente()).get();
        Receita receita = receitaRepo.findById(dto.codReceita()).get();
        Usuario usuario = usuarioRepo.findById(dto.codUsuarioInclusao()).get();
        Integer numOrdem = repo.buscarProximoNumOrdem(dto.codReceita()) != null ? repo.buscarProximoNumOrdem(dto.codReceita()) : 1;
        ReceitaIngrediente receitaIngrediente = new ReceitaIngrediente(dto, ingrediente, receita, usuario, numOrdem);
        repo.save(receitaIngrediente);
        return receitaIngrediente.getNumOrdem();
    }

    @Transactional(readOnly = true)
    public Map<String, Object> listarReceitaIngredientesPorReceitaId(Long id, HttpServletRequest request) {
        datatables.setRequest(request);
        datatables.setColunas(DatatablesColunas.RECEITA_INGREDIENTE);
        Page<ReceitaIngrediente> page = repo.findAllByCodReceita(datatables.getPageableWithoutPage(), id);
        return datatables.getResponse(page);
    }

    @Transactional(readOnly = false)
    public void atualizarReceitaIngrediente(EditarReceitaIngredienteDTO dto) {
        //ReceitaIngrediente receitaIngrediente = buscarReceitaPorId(dto.codReceita()).orElseThrow();
        //receitaIngrediente.atualizarReceitaIngrediente(dto);
        //repo.save(receita);
    }
}
