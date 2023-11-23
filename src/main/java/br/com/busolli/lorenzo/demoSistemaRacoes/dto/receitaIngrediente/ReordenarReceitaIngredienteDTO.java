package br.com.busolli.lorenzo.demoSistemaRacoes.dto.receitaIngrediente;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record ReordenarReceitaIngredienteDTO (
        @NotNull
        Long codReceita,
        @NotNull
        @NotEmpty
        Long[] ordemIngredientes
){
}
