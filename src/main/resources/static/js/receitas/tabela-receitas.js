$(document).ready(function() {
    moment.locale("pt-BR");
})

function construirTabelaReceitas(consulta){
    let codReceita = consulta.codReceita;
    let desReceita = consulta.desReceita;

    console.log(desReceita)

    let url = `/receita/listar`;
    if((codReceita == null || codReceita == "" || codReceita == undefined || codReceita <= 0) && desReceita != ""){
        url = `/receita/listarDesReceita/${desReceita}`
    }
    if(codReceita != null && codReceita != "" && codReceita != undefined && codReceita > 0){
        url = `/receita/listarCodReceita/${codReceita}`
    }

    console.log(url);

    let table = $('#table-receitas').DataTable({
        destroy: true,
        searching : false,
        lengthMenu : [ 5, 10, 50, 100, 500 ],
        ordering: true,
        processing : true,
        serverSide : true,
        responsive : true,
        //rowReorder: { selector: 'td:nth-child(2)' },
        order: [0, 'asc'],
        ajax : {
            url : url,
            data : 'data'
        },

        columns : [
            {orderable : false, data : "codReceita", "render":
               function(codReceita){
                   return '<a role="button" data-toggle="modal" data-target="#confirm-modal"><i style="transform: scale(1.4); color:grey; " class="fas fa-caret-right"></i></a>';
               }
            },
            {data : 'codReceita'},
            {data : 'desReceita'},
            {orderable : false,	data : 'codReceita', "render" :
                function(id) {
                    return '<a class="btn-editar-receita" id="' //btn btn-primary btn-sm btn-block
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal"><input type="image" src="../icons/pencil-square.svg" class="editar-receita img-icon"></a>'; //<i class="fa-solid fa-pencil"></i>
                }
            },
            {orderable : false,	data : 'codReceita', "render" :
                function(id) {
                    return '<a class="btn-excluir-receita" id="' //btn btn-danger btn-sm btn-block
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal"><input type="image" src="../icons/trash-fill.svg" class="excluir-receita img-icon"></a>'; //<i class="fas fa-times-circle"></i>
                }
            }
        ],
        columnDefs: [
                        {
                            targets: [0, 1, 2, 3, 4], // Índices das colunas que você deseja aplicar a classe
                            className: 'tabela-maior'
                        }
        ],
        "language": {
                "decimal": ",",
                "thousands": ".",
                "sEmptyTable": "Nenhuma receita encontrada",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhuma receita encontrada",
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

            }
    });
    detectaClickLinhaTabela(table);
}

function detectaClickLinhaTabela(table){
    //Remove listeners ativos para não haver repetição
    $('#table-receitas tbody').off('click', 'tr.odd td:first-child');
    $('#table-receitas tbody').off('click', 'tr.even td:first-child');

    //Adiciona novos listeners
    $('#table-receitas tbody').on('click', 'tr.odd td:first-child', function () {
        construirTelaIngredientesReceita(this, table);
    });
    $('#table-receitas tbody').on('click', 'tr.even td:first-child', function () {
        construirTelaIngredientesReceita(this, table);
    });
}

function construirTelaIngredientesReceita(event, table){
    let idReceita = $(event).parent().find("td:nth-child(2)").text();
    let currentRow = table.row(event);

    // A linha filha está aberta, então a feche
    if (currentRow.child.isShown()) {
        currentRow.child.hide();
        $(event).removeClass('shown');
        $(event).find("a i").toggleClass("fa-caret-right")
        $(event).find("a i").toggleClass("fa-caret-down")

    // A linha filha está fechada, então abra e faça a requisição AJAX
    } else {
        $(event).find("a i").toggleClass("fa-caret-down")
        $(event).find("a i").toggleClass("fa-caret-right")

        // Gera a linha a partir da resposta da requisição
        let childContent = generateChildContent(/*rowId, response,*/ idReceita);
        currentRow.child(childContent).show();
        $(currentRow.node()).addClass('shown');
    }

    construirTabelaReceitaIngredientes(idReceita);
    setTimeout(() => buscarIngredientesParaReceita(idReceita), 200);
}

function generateChildContent(/*rowId, response,*/ idReceita) {
    let childContent = '<table style="width: 100%!important; margin-top:25px;" class="table-receita-ingrediente" id="table-receita-ingrediente-' + idReceita + '">'
    childContent += '<thead>'
    childContent += '<tr>'
    childContent += '<th>Ordem</th>'
    childContent += '<th>Cod Ingrediente</th>'
    childContent += '<th>Des Ingrediente</th>'
    childContent += '<th>Qtd Kgs</th>'
    childContent += '<th>Editar</th>'
    childContent += '<th>Excluir</th>'
    childContent += '</tr>'
    childContent += '</thead>'
    childContent += '</table>'

    childContent += '<div class="child row" style="margin-top:15px; margin-bottom:60px;" id="' + idReceita + '"';
    childContent += '<div class="row d-flex justify-content-end">'
    childContent += '<div class="col-1 d-flex align-items-center">'
    childContent += '<a class="btn btn-success btn-sm btn-block btn-editar-ingrediente" style="margin-left: 3.15rem;"'
    childContent += 'role="button" data-toggle="modal" data-target="#confirm-modal"><i class="fa-solid fa-plus"></i></a>'
    childContent += '</div>'
    childContent += '<div class="col-1" id="div-select-num-ordem-' + idReceita + '"></div>' //num ordem
    childContent += '<div class="col-7" id="div-select-ingrediente-' + idReceita + '"></div>' //select ingrediente
    childContent += '<div class="col-3" id="div-peso-ingrediente-' + idReceita + '"></div>' //peso ingrediente
    childContent += '</div>'
    childContent += '</div>';
    return childContent;
}
