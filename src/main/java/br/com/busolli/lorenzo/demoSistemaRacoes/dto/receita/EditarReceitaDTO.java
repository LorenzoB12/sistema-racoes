package br.com.busolli.lorenzo.demoSistemaRacoes.dto.receita;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record EditarReceitaDTO (
        @NotNull
        Long codReceita,
        @NotBlank
        String desReceita){
}
