package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.ReceitaIngrediente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaIngredienteRepository extends JpaRepository<ReceitaIngrediente, Long> {
}
