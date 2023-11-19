package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Ingrediente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Long> {
}
