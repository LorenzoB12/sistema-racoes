package br.com.busolli.lorenzo.demoSistemaRacoes.service;

import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.Datatables;
import br.com.busolli.lorenzo.demoSistemaRacoes.datatables.DatatablesColunas;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.CadastroReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.EditarReceitaIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente.ReordenarReceitaIngredienteDTO;
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

import java.util.List;
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
        Ingrediente ingrediente = ingredienteRepo.findById(dto.codIngrediente()).get();
        ReceitaIngrediente receitaIngrediente = buscarReceitaPorId(dto.numSeq());
        receitaIngrediente.atualizarReceitaIngrediente(dto, ingrediente);
        repo.save(receitaIngrediente);
    }

    @Transactional(readOnly = false)
    public List<ReceitaIngrediente> buscarIngredientesPorReceita(Long id) {

        return repo.findAllByCodReceita(id);
    }

    @Transactional(readOnly = false)
    public void reordenarIngredientesNaReceita(ReordenarReceitaIngredienteDTO dto) {
        List<ReceitaIngrediente> lista = buscarIngredientesPorReceita(dto.codReceita());
        int contador = 1;
        for(Long ordem : dto.ordemIngredientes()){
            for(ReceitaIngrediente ing : lista){
                if(ing.getNumSeq().equals(ordem)){
                    ing.setNumOrdem(contador);
                    repo.save(ing);
                    contador++;
                }
            }
        }
    }

    @Transactional(readOnly = false)
    public Long deletarReceitaIngrediente(Long numSeq) {
        ReceitaIngrediente receitaIngrediente = buscarReceitaPorId(numSeq);
        repo.delete(receitaIngrediente);
        reordenarIngredientesReceitaAposExclusao(receitaIngrediente.getCodReceita());
        return receitaIngrediente.getCodReceita().getCodReceita();
    }

    @Transactional(readOnly = true)
    private ReceitaIngrediente buscarReceitaPorId(Long id){

        return repo.findById(id).get();
    }

    @Transactional(readOnly = false)
    private void reordenarIngredientesReceitaAposExclusao(Receita receita){
        List<ReceitaIngrediente> lista = repo.findAllByCodReceita(receita.getCodReceita());
        for(int i = 0; i < lista.size(); i++){
            lista.get(i).setNumOrdem((i + 1));
            repo.save(lista.get(i));
        }
    }
}
