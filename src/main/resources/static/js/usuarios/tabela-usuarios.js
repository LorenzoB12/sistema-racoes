function construirTabelaUsuarios(resposta){
    let usuarios = []
    $.each(resposta, function(chave, valor){
        usuario = [valor.codUsuario, valor.desUsuario, valor.desEmail, "", ""];
        usuarios.push(usuario);
    })
    iniciarTabelaUsuarios(usuarios);
}

function iniciarTabelaUsuarios(valores) {
    var cabecalho = [
        { title: "Cod Usuario" },
        { title: "Des Usuário" },
        { title: "Des Email" },
        { title: "Editar" },
        { title: "Excluir" }
    ];

    if ($.fn.DataTable.isDataTable("#table-usuarios")) {
        $('#table-usuarios').DataTable().destroy();
        $('#table-usuarios').empty();
    }

    $('#table-usuarios').DataTable({
        destroy: true,
        data: valores, //BODY DA TABELA
        columns: cabecalho, //CABECALHO DA TABELA
        "scrollX": false,
        searching: false,
        responsive: true,
        paging: false,
        ordering: true,
        "info": false,
        "language": {
            "decimal": ",",
            "thousands": ".",
            "sEmptyTable": "Nenhum registro encontrado encontrado para o seu usuário",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado para o seu usuário",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "copyTitle": "Cópia realizada com sucesso!",
                "print": "Imprimir",
                "copySuccess":
                {
                    "1": "Uma linha copiada com sucesso",
                    "_": "%d linhas copiadas com sucesso"
                }}

        },
        "searchBuilder": {
            "add": "Adicionar Condição",
            "button": {
                "0": "Construtor de Pesquisa",
                "_": "Construtor de Pesquisa (%d)"
            },
            "clearAll": "Limpar Tudo",
            "condition": "Condição",
            "conditions": {
                "date": {
                    "after": "Depois",
                    "before": "Antes",
                    "between": "Entre",
                    "empty": "Vazio",
                    "equals": "Igual",
                    "not": "Não",
                    "notBetween": "Não Entre",
                    "notEmpty": "Não Vazio"
                },
                "number": {
                    "between": "Entre",
                    "empty": "Vazio",
                    "equals": "Igual",
                    "gt": "Maior Que",
                    "gte": "Maior ou Igual a",
                    "lt": "Menor Que",
                    "lte": "Menor ou Igual a",
                    "not": "Não",
                    "notBetween": "Não Entre",
                    "notEmpty": "Não Vazio"
                },
                "string": {
                    "contains": "Contém",
                    "empty": "Vazio",
                    "endsWith": "Termina Com",
                    "equals": "Igual",
                    "not": "Não",
                    "notEmpty": "Não Vazio",
                    "startsWith": "Começa Com"
                },
                "array": {
                    "contains": "Contém",
                    "empty": "Vazio",
                    "equals": "Igual à",
                    "not": "Não",
                    "notEmpty": "Não vazio",
                    "without": "Não possui"
                }
            },
            "data": "Data",
            "deleteTitle": "Excluir regra de filtragem",
            "logicAnd": "E",
            "logicOr": "Ou",
            "title": {
                "0": "Construtor de Pesquisa",
                "_": "Construtor de Pesquisa (%d)"
            },
            "value": "Valor"
        },
    });

    $("#table-usuarios thead tr").addClass("bg-dark text-white");
    $("#table-usuarios_filter").addClass("mb-3");
    adicionaImagens();
}

function adicionaImagens(){
    $('#table-usuarios tr:not(:has(td:nth-child(4) > input))').each(function() {
        let tagInput = $("<input>");
        tagInput.attr("type", "image");
        tagInput.attr("src", "../icons/pencil-square.svg");
        tagInput.addClass("editar-usuario");
        tagInput.addClass("img-icon");
        $(this).find('td:nth-child(4)').append(tagInput);
    });

    $('#table-usuarios tr:not(:has(td:nth-child(5) > input))').each(function() {
        let tagInput = $("<input>");
        tagInput.attr("type", "image");
        tagInput.attr("src", "../icons/trash-fill.svg");
        tagInput.addClass("excluir-usuario");
        tagInput.addClass("img-icon");
        $(this).find('td:nth-child(5)').append(tagInput);
    });
}