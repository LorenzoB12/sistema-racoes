package br.com.busolli.lorenzo.demoSistemaRacoes.dto.ingrediente;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record EditarIngredienteDTO(
        @NotNull
        Long codIngrediente,
        @NotBlank
        String desIngrediente,
        @NotBlank
        String numLote,
        @NotNull
        LocalDate dtaValidade,
        String codEan) {
}
