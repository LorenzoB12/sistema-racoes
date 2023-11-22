package br.com.busolli.lorenzo.demoSistemaRacoes.service;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repo;

    @Transactional(readOnly = true)
    public List<Usuario> listarUsuarios(){
        return repo.findAllByIndAtivoTrue();
    }

    @Transactional(readOnly = false)
    public boolean cadastrarUsuario(Usuario usuario){
        if(repo.findByDesUsuario(usuario.getDesUsuario()).orElse(null) != null){
            return false;
        }
        repo.save(usuario);
        return true;
    }

    @Transactional(readOnly = false)
    public void editarUsuario(Usuario usuario){
        repo.save(usuario);
    }

    @Transactional
    public void excluirUsuario(Long id){
        repo.findById(id).get().setIndAtivo(Boolean.FALSE);
    }
}
