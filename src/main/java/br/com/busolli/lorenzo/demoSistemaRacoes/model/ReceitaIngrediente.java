package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "RECEITA_INGREDIENTE")
@Getter
public class ReceitaIngrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numSeq;

    @ManyToOne
    @JoinColumn(name = "COD_RECEITA", referencedColumnName = "COD_RECEITA", insertable = false, updatable = false)
    @NonNull
    private Receita codReceita;

    @ManyToOne
    @JoinColumn(name = "COD_INGREDIENTE", referencedColumnName = "COD_INGREDIENTE", insertable = false, updatable = false)
    @NonNull
    private Ingrediente codIngrediente;

    @NonNull
    private Integer numOrdem;

    @NonNull
    private BigDecimal qtdKgs;

    @NonNull
    private LocalDateTime dthInclusao;

    @ManyToOne
    @JoinColumn(name = "COD_USUARIO_INCLUSAO", referencedColumnName = "COD_USUARIO", insertable = false, updatable = false)
    @NonNull
    private Usuario codUsuarioInclusao;

    public ReceitaIngrediente(){

    }
}