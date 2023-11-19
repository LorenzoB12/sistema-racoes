package br.com.busolli.lorenzo.demoSistemaRacoes.service.infra;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.mindrot.jbcrypt.BCrypt;

import java.util.Arrays;
import java.util.Optional;

public class CookieService {

	public static void setCookie(HttpServletResponse response, String usuario, String desUsuario, Integer segundos) {
		desUsuario = desUsuario.replace(" ", "_");
		Cookie cookie = new Cookie(usuario, desUsuario);
		cookie.setMaxAge(segundos);
		response.addCookie(cookie);
	}
	
	public static String getCookie(HttpServletRequest request, String usuario) {
		return Optional.ofNullable(request.getCookies())
					   .flatMap(cookies -> Arrays.stream(cookies)
					   .filter(cookie -> usuario.equals(cookie.getName()))
					   .findAny())
					   .map(e -> e.getValue())
					   .orElse(null);
		
	}
	
}
