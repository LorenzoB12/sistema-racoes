package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;

import java.time.LocalDateTime;

@Entity
@Table(name = "RECEITA")
@Getter
public class Receita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_RECEITA")
    private Long codReceita;

    @NonNull
    private String desReceita;

    @NonNull
    private LocalDateTime dthInclusao;

    @ManyToOne
    @JoinColumn(name = "COD_USUARIO_INCLUSAO", referencedColumnName = "COD_USUARIO", insertable = false, updatable = false)
    @NonNull
    private Usuario codUsuarioInclusao;

    public Receita(){

    }
}
