const cadastrarReceita = (receita) => {
    $.ajax({
        url: "receita/cadastrar",
        method: "POST",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(receita),
        statusCode: {
            200: function(response) {
                construirTabelaReceitas();
                limparCamposAposCadastroReceita();
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

const editarReceita = (receita) => {
    $.ajax({
        url: "receita/editar",
        method: "PUT",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(receita),
        statusCode: {
            200: function(response) {
                construirTabelaReceitas( {codReceita: null, desReceita: ""} );
                limparCamposAposCadastroReceita();
                alertSucesso("Receita " + response + " editada!");
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

const excluirReceita = (id) => {
    $.ajax({
        url: "receita/excluir/" + id,
        method: "DELETE",
        statusCode: {
            200: function(response) {
                construirTabelaReceitas( {codReceita: null, desReceita: ""} );
                limparCamposAposCadastroReceita();
                alertSucesso("Receita " + response + " deletada!");
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

const buscarIngredientesParaReceita = (idReceita) => {
    $.ajax({
        url: "ingrediente/listarJson",
        method: "GET",
        statusCode: {
            200: function(response) {
                construirSelectListAdicionarItemReceita(response, idReceita);
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

const cadastrarItemReceita = (itemReceita) => {
    $.ajax({
        url: "receitaIngrediente/cadastrar",
        method: "POST",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(itemReceita),
        statusCode: {
            200: function(response) {
                construirTabelaReceitaIngredientes(itemReceita.codReceita);
                limparCamposAposCadastroReceitaIngrediente(itemReceita.codReceita);
                alertSucesso(`Ingrediente cadastrado na posição ${response} da ordem`);
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

const editarReceitaIngrediente = (receitaIngrediente) => {
    $.ajax({
        url: "receitaIngrediente/editar",
        method: "PUT",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(receitaIngrediente),
        statusCode: {
            200: function(response) {
                //construirTabelaReceitas( {codReceita: null, desReceita: ""} );
                //limparCamposAposCadastroReceita();
                //alertSucesso("Receita " + response + " editada!");
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