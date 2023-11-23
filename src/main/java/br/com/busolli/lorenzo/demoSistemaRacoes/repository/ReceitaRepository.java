package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import br.com.busolli.lorenzo.demoSistemaRacoes.model.Receita;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
    @Query(value = "SELECT * FROM RECEITA", nativeQuery = true)
    Page<Receita> findAll(Pageable pageable);

    @Query(value = "SELECT * FROM RECEITA WHERE COD_RECEITA = :codReceita", nativeQuery = true)
    Page<Receita> findById(Long codReceita, Pageable pageable);

    @Query(value = "SELECT * FROM RECEITA WHERE DES_RECEITA LIKE CONCAT('%', :desReceita, '%')", nativeQuery = true)
    Page<Receita> findByDesReceita(String desReceita, Pageable pageable);
}
