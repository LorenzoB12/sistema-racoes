package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.ReceitaIngrediente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReceitaIngredienteRepository extends JpaRepository<ReceitaIngrediente, Long> {
    @Query(value = """
            SELECT (MAX(NUM_ORDEM) + 1)
              FROM RECEITA_INGREDIENTE
             WHERE COD_RECEITA = :codReceita
            """, nativeQuery = true)
    Integer buscarProximoNumOrdem(Long codReceita);

    @Query(value = """
            SELECT * 
              FROM RECEITA_INGREDIENTE 
             WHERE COD_RECEITA = :id 
             ORDER BY NUM_ORDEM ASC 
            """, nativeQuery = true)
    Page<ReceitaIngrediente> findAllByCodReceita(Pageable pageable, Long id);

    @Query(value = """
            SELECT * 
              FROM RECEITA_INGREDIENTE 
             WHERE COD_RECEITA = :id 
             ORDER BY NUM_ORDEM ASC 
            """, nativeQuery = true)
    List<ReceitaIngrediente> findAllByCodReceita(Long id);
}
