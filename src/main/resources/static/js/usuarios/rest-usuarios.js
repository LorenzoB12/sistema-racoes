

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
                //console.log(400);
            },
            401: function(response) {
                //console.log(401);
            },
            404: function(response) {
                //console.log(404);
            },
            405: function(response) {
                //console.log(405);
            },
            500: function(response) {
                alert("Erro no servidor - Favor contatar o setor de TI");
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
            200: function(response) {
                //console.log(200)
            },
            201: function(response) {
                buscarUsuarios();
                reinicarTelaCadastroUsuarios();
                alertSucesso("Usuário cadastrado com sucesso!")
            },
            400: function(response) {
                avisoNegacao(response.responseText);
            },
            401: function(response) {
                //console.log(401);
            },
            404: function(response) {
                //console.log(404);
            },
            405: function(response) {
                //console.log(405);
            },
            500: function(response) {
                alert("Erro no servidor - Favor contatar o setor de TI");
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
            200: function(response) {
                //console.log(200)
            },
            201: function(response) {
                //console.log(201)
            },
            204: function(response) {
                buscarUsuarios()
                alertSucesso("Usuário inativado!")
            },
            400: function(response) {
                //console.log(400);
            },
            401: function(response) {
                //console.log(401);
            },
            404: function(response) {
                //console.log(404);
            },
            405: function(response) {
                //console.log(405);
            },
            500: function(response) {
                alert("Erro no servidor - Favor contatar o setor de TI");
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
            201: function(response) {
                //console.log(201)
            },
            204: function(response) {
                //console.log(204)
            },
            400: function(response) {
                //console.log(400);
            },
            401: function(response) {
                //console.log(401);
            },
            404: function(response) {
                //console.log(404);
            },
            405: function(response) {
                //console.log(405);
            },
            500: function(response) {
                alert("Erro no servidor - Favor contatar o setor de TI");
            }
        }
    })
}