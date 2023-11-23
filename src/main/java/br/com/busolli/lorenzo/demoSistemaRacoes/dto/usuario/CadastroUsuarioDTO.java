package br.com.busolli.lorenzo.demoSistemaRacoes.dto.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CadastroUsuarioDTO(
        @NotBlank
        String desUsuario,
        @Email(message = "E-Mail inválido, por favor tente novamente!")
        String desEmail,
        @NotBlank
        String desSenha

) {
}
