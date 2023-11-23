# Sobre o projeto

ERP Rações é uma aplicação full stack web desenvolvida na plataforma do framework Spring Java. 

A aplicação consiste em realizar dois cadastros base e fazer sua relação através de um cadastro de receitas que possuem ingredientes ordenados para serem consumidas pelo usuário da fábrica.

## Tela de Login
![Layout do Cadastro e Listagem de Ingredientes](https://github.com/LorenzoB12/assests/blob/main/TELA%20DE%20LOGIN.png)

## Layout do Cadastro e Listagem de Ingredientes
![Layout do Cadastro e Listagem de Ingredientes](https://github.com/LorenzoB12/assests/blob/main/CADASTRO%20INGREDIENTES.png)

## Layout do Cadastro e Listagem de Receitas
![Layout do Cadastro de Ingredientes](https://github.com/LorenzoB12/assests/blob/main/CADASTRO.png)  
![Layout da Listagem de Ingredientes](https://github.com/LorenzoB12/assests/blob/main/LISTAGEM.png)

## Modelo conceitual do Banco de Dados
![Modelo Conceitual do Banco de Dados](https://github.com/LorenzoB12/assests/blob/main/MODELO%20BD%20RA%C3%87%C3%95ES.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- Spring Data
- Spring Valid
- JPA / Hibernate
- Maven
- Thymeleaf
## Front end
- HTML / CSS / JS
- Jquery
- Bibliotecas JS/CSS (Datatables, Bootstrap)
## Banco de Dados
- MySql

# Como executar o projeto

## Back end
Pré-requisitos: 
- Java 17
- Maven
- Variáveis de ambiente Java - vídeo explicativo (https://www.youtube.com/watch?v=_RlftGYiAn8)
- Variáveis de ambiente Maven - vídeo explicativo (https://www.youtube.com/watch?v=XxpotPelAIY)

```bash
# clonar repositório
git clone https://github.com/LorenzoB12/sistema-racoes

# entrar na pasta do projeto back end (pasta raiz onde está contido o arquivo pom.xml)
cd demoSistemaRacoes

# executar o projeto
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: 
- Navegador Web

## Banco de Dados
Pré-requisitos:
- Baixar e instalar o banco de dados MySql
- Configurar uma instância do banco de dados para as seguintes propriedades:
url = jdbc:mysql://localhost:3306/racoes?useTimezone=true&serverTimezone=America/Sao_Paulo&useSSL=false
username = root
password= root
- Executar o script de criação das tabelas armazenado no seguinte diretório ()

## Login no Sistema
Utilizar as seguintes credenciais inicialmente:
- User: ADMIN
- Senha: 123456

# Autor
Lorenzo Busolli
https://www.linkedin.com/in/lorenzo-busolli/

Acredito ter suprido todas as demandas solicitadas no projeto e toda a explicação para rodar a aplicação está no texto acima, porém se houverem dúvidas sobre a instalação, sobre qualquer processo do deploy da aplicação ou de como fazer seu uso, por favor, entre em contato! Desde já, agradeço!
