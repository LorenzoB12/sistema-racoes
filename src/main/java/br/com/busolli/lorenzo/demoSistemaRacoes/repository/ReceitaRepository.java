package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Receita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaRepository extends JpaRepository<Receita, Long> {
}
