package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
    @Query(value = "SELECT * FROM INGREDIENTE WHERE IND_ATIVO = 1", nativeQuery = true)
    Page<Ingrediente> findAllByIndAtivoTrue(Pageable pageable);

    @Query(value = "SELECT * FROM INGREDIENTE WHERE IND_ATIVO = 1", nativeQuery = true)
    List<Ingrediente> findAllByIndAtivoTrue();
}
