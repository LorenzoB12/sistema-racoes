package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;

@Entity
@Table(name = "INGREDIENTE")
@Getter
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_INGREDIENTE")
    private Long codIngrediente;

    @NonNull
    private String desIngrediente;

    public Ingrediente(){

    }
}
