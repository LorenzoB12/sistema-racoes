package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

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
    private String desSenha;
    @Setter
    @NonNull
    private Boolean indAtivo;

    public Usuario() {}
}
