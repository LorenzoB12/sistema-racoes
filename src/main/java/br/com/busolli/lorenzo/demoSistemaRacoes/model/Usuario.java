package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.usuario.CadastroUsuarioDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.mindrot.jbcrypt.BCrypt;

@Entity
@Table(name = "USUARIO")
@Getter
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_USUARIO")
    private Long codUsuario;

    private String desUsuario;

    private String desEmail;

    @JsonIgnore
    private String desSenha;

    @Setter
    @JsonIgnore
    private Boolean indAtivo;

    public Usuario() {}

    public Usuario(CadastroUsuarioDTO dto) {
        this.desUsuario = dto.desUsuario();
        this.desEmail = dto.desEmail();
        this.desSenha = BCrypt.hashpw(dto.desSenha(), BCrypt.gensalt());
        this.indAtivo = Boolean.TRUE;
    }
}
