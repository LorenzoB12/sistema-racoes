package br.com.busolli.lorenzo.demoSistemaRacoes.model;

import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.CadastroReceitaDTO;
import br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita.EditarReceitaDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
    @JoinColumn(name = "COD_USUARIO_INCLUSAO", referencedColumnName = "COD_USUARIO")
    @NonNull
    private Usuario codUsuarioInclusao;

    public Receita(){

    }

    public Receita(CadastroReceitaDTO dto, Usuario usuario){
        this.codReceita = null;
        this.desReceita = dto.desReceita();
        this.dthInclusao = LocalDateTime.now();
        this.codUsuarioInclusao = usuario;
    }

    public void atualizarReceita(EditarReceitaDTO dto) {

        this.desReceita = dto.desReceita();
    }
}
