package br.com.busolli.lorenzo.demoSistemaRacoes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

    @GetMapping("/login")
    public String login(){

        return "Login/login";
    }

    @GetMapping("/menu")
    public String menu(Model model){
        model.addAttribute("pagina", "Menu/bem-vindo");
        return "Menu/menu";
    }

    @GetMapping("/usuarios")
    public String usuarios(Model model){
        model.addAttribute("pagina", "Usuario/usuarios");
        return "Menu/menu";
    }

    @GetMapping("/ingredientes")
    public String ingredientes(Model model){
        model.addAttribute("pagina", "Ingrediente/ingredientes");
        return "Menu/menu";
    }

    @GetMapping("/receitas")
    public String receitas(Model model){
        model.addAttribute("pagina", "Receita/receitas");
        return "Menu/menu";
    }
}
