package br.com.busolli.lorenzo.demoSistemaRacoes.service.infra;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class LoginInterceptorAppConfig implements WebMvcConfigurer{

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginInterceptor())
				.excludePathPatterns("/login"
						,"/logar"
						,"/css-novo/**"
						,"/icons-novo/**"
						,"/js-novo/**"
						,"/js-frameworks/**"
						,"/templates/**"
						,"/static/**"
						,"/loginAntigo/**"
						,"/buscarLotesDisponiveisSimAntigo/**"
						,"/trocarSituacaoPedidoRefrigeradoParaProntoParaFaturar/**"
						,"/buscarCreditoEPagamentoClientes/**");
	}
	
}
