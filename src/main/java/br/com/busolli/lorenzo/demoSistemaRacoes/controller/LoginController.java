package br.com.busolli.lorenzo.demoSistemaRacoes.controller;

import br.com.busolli.lorenzo.demoSistemaRacoes.model.Usuario;
import br.com.busolli.lorenzo.demoSistemaRacoes.repository.UsuarioRepository;
import br.com.busolli.lorenzo.demoSistemaRacoes.service.infra.CookieService;
import jakarta.servlet.http.HttpServletResponse;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepo;

    @PostMapping("/logar")
    public String logar(@RequestParam String user, @RequestParam String password, HttpServletResponse response) {
        Optional<Usuario> usuarioOpt = usuarioRepo.findByDesUsuario(user);
        Usuario usuario = usuarioOpt.orElse(null);
        Integer tempoExpiracaoCookie = (60 * 60 * 12); //12 horas

        if(usuario == null) {
            return "Login/login";
        }

        if(BCrypt.checkpw(password, usuario.getDesSenha())){
            String desUsuario = usuario.getCodUsuario().toString() + "-" + usuario.getDesUsuario().toString();
            CookieService.setCookie(response, "usuario", desUsuario, tempoExpiracaoCookie);
            return "redirect:/menu";
        } else {
            return "Login/login";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpServletResponse response) {
        CookieService.setCookie(response, "usuario", "", 0);
        return "redirect:/login";
    }
}
