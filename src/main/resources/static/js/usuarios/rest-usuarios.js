//BUSCAR USUÁRIOS ATIVOS
function buscarUsuarios(){
    $.ajax({
        url: "/usuario/listar",
        method: "GET",
        statusCode: {
            200: function(response) {
                construirTabelaUsuarios(response);
            },
            400: function(response) {
                alert("Erro 400 - Favor contatar o setor de TI");
            },
            401: function(response) {
                alert("Erro 401 - Favor contatar o setor de TI");
            },
            404: function(response) {
                alert("Erro 404 - Favor contatar o setor de TI");
            },
            405: function(response) {
                alert("Erro 405 - Favor contatar o setor de TI");
            },
            500: function(response) {
                alert("Erro 500 - Favor contatar o setor de TI");
            }
        }
    })
}

//CADASTRAR USUÁRIO
function cadastrarUsuario(){
    let desUsuario = $("#input-nome").val();
    let desEmail = $("#input-email").val();
    let desSenha = $("#input-senha").val();

    let obj = {
        desUsuario,
        desEmail,
        desSenha,
        indAtivo : true
    }

    $.ajax({
        url: "/usuario/cadastrar",
        method: "POST",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(obj),
        statusCode: {
            201: function(response) {
                buscarUsuarios();
                reinicarTelaCadastroUsuarios();
                alertSucesso("Usuário cadastrado com sucesso!")
            },
            400: function(response) {
                avisoNegacao("Ação inválida! Tente novamente.");
            },
            401: function(response) {
                alert("Erro 401 - Favor contatar o setor de TI");
            },
            404: function(response) {
                alert("Erro 404 - Favor contatar o setor de TI");
            },
            405: function(response) {
                alert("Erro 405 - Favor contatar o setor de TI");
            },
            500: function(response) {
                alert("Erro 500 - Favor contatar o setor de TI");
            }
        }
    })
}

//EXCLUIR USUÁRIO PELO ID
function excluirUsuario(id){
    $.ajax({
        url: "usuario/excluir/" + id,
        method: "DELETE",
        statusCode: {
            204: function(response) {
                buscarUsuarios()
                alertSucesso("Usuário inativado!")
            },
            400: function(response) {
                alert("Erro 400 - Favor contatar o setor de TI");
            },
            401: function(response) {
                alert("Erro 401 - Favor contatar o setor de TI");
            },
            404: function(response) {
                alert("Erro 404 - Favor contatar o setor de TI");
            },
            405: function(response) {
                alert("Erro 405 - Favor contatar o setor de TI");
            },
            500: function(response) {
                alert("Erro 500 - Favor contatar o setor de TI");
            }
        }
    })
}

//ALTERAR DADOS USUÁRIO
function enviarDadosEdicaoUsuario(){
    let desUsuario = $("#input-nome").val();
    let desEmail = $("#input-email").val();
    let desSenha = $("#input-senha").val();
    let codUsuario = $("#cod-usuario-editar").val();

    let obj = {
        codUsuario,
        desUsuario,
        desEmail,
        desSenha,
        indAtivo : true
    }

    $.ajax({
        url: "usuario/editar",
        method: "PUT",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(obj),
        statusCode: {
            200: function(response) {
                buscarUsuarios();
                reinicarTelaCadastroUsuarios();
                alertSucesso("Usuário editado com sucesso!")
            },
            400: function(response) {
                avisoNegacao("Ação inválida! Tente novamente.");
            },
            401: function(response) {
                alert("Erro 401 - Favor contatar o setor de TI");
            },
            404: function(response) {
                alert("Erro 404 - Favor contatar o setor de TI");
            },
            405: function(response) {
                alert("Erro 405 - Favor contatar o setor de TI");
            },
            500: function(response) {
                alert("Erro 500 - Favor contatar o setor de TI");
            }
        }
    })
}