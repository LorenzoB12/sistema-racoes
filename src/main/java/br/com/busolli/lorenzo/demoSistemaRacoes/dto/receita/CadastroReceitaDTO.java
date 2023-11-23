package br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CadastroReceitaDTO(
        @NotBlank
        String desReceita,
        @NotNull
        Long codUsuarioInclusao) {
}
