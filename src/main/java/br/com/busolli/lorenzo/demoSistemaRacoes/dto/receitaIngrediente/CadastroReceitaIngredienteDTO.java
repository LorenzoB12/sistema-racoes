package br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record CadastroReceitaIngredienteDTO(
        @NotNull
        Long codReceita,
        @NotNull
        Long codIngrediente,
        @NotNull
        @DecimalMin(value = "0.01", inclusive = true)
        BigDecimal qtdKgs,
        @NotNull
        Long codUsuarioInclusao) {
}
