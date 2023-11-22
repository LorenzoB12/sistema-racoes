package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.CadastroIngredienteDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente.EditarIngredienteDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "INGREDIENTE")
@Getter
@ToString
@NoArgsConstructor
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_INGREDIENTE")
    private Long codIngrediente;

    private String desIngrediente;

    private String numLote;

    private LocalDate dtaValidade;

    private String codEan;

    @Setter
    private Boolean indAtivo;

    public Ingrediente(CadastroIngredienteDTO dto) {
        this.codIngrediente = null;
        this.desIngrediente = dto.desIngrediente();
        this.numLote = dto.numLote();
        this.dtaValidade = dto.dtaValidade();
        this.codEan = dto.codEan();
        this.indAtivo = Boolean.TRUE;
    }

    public void atualizarIngrediente(EditarIngredienteDTO dto) {
        this.codIngrediente = dto.codIngrediente();
        this.desIngrediente = dto.desIngrediente();
        this.numLote = dto.numLote();
        this.dtaValidade = dto.dtaValidade();
        this.codEan = dto.codEan();
    }
}
