package br.com.busolli.lorenzo.demoSistemaRacoes.repository;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findAllByIndAtivoTrue();

    Optional<Usuario> findByDesUsuario(String user);
}
