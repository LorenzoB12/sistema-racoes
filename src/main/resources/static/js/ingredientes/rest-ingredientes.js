const cadastrarIngrediente = (ingrediente) => {
    $.ajax({
        url: "ingrediente/cadastrar",
        method: "POST",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(ingrediente),
        statusCode: {
            200: function(response) {
                construirTabelaIngredientes()
                limparCamposAposCadastro();
                alertSucesso(`Ingrediente de id ${response} cadastrado com sucesso!`);
            },
            400: function(response) {
                avisoNegacao("Por favor, preencha todos os campos obrigatórios!")
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

const editarIngrediente = (ingrediente) => {
    $.ajax({
        url: "ingrediente/editar",
        method: "PUT",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(ingrediente),
        statusCode: {
            200: function(response) {
                resetarBotoesAposAlteracao();
                construirTabelaIngredientes();
                limparCamposAposCadastro();
                alertSucesso("Ingrediente " + response + " editado!");
            },
            400: function(response) {
                avisoNegacao("Por favor, preencha todos os campos obrigatórios!")
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

const inativarIngrediente = (id) => {
    $.ajax({
        url: "ingrediente/excluir/" + id,
        method: "DELETE",
        statusCode: {
            200: function(response) {
                resetarBotoesAposAlteracao();
                construirTabelaIngredientes();
                limparCamposAposCadastro();
                alertSucesso("Ingrediente " + response + " inativado!");
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