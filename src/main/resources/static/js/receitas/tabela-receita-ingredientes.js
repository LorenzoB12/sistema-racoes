function construirTabelaReceitaIngredientes(idReceita){
    let table = $('#table-receita-ingrediente-' + idReceita).DataTable({
        destroy: true,
        searching : false,
        lengthMenu : [ 1000 ],
        paging: false,
        "info": false,
        processing : true,
        serverSide : true,
        responsive : true,
        ordering: false,
        //rowReorder: { selector: 'tr', update: true },
        //order: [0, 'asc'],
        ajax : {
            url : `/receitaIngrediente/listar/${idReceita}`,
            data : 'data'
        },

        columns : [
            {data : 'numSeq', className : "hidden"},
            {data : 'numOrdem'},
            {data : 'codIngrediente.codIngrediente'},
            {data : 'codIngrediente.desIngrediente'},
            {data : 'qtdKgs', "render": function(qtdKgs){
                return formatarNumero(qtdKgs);
            }},
            {orderable : false,	data : 'numSeq', "render" :
                function(id) {
                    return '<a class="btn btn-primary btn-sm btn-block btn-editar-receita-ingrediente" id="'
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal" style="transform:scale(0.7);"><i class="fa-solid fa-pencil"></i></a>';
                }
            },
            {orderable : false,	data : 'numSeq', "render" :
                function(id) {
                    return '<a class="btn btn-danger btn-sm btn-block btn-excluir-receita-ingrediente" id="'
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal" style="transform:scale(0.7);"><i class="fas fa-times-circle"></i></a>';
                }
            }
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4, 5, 6],
                className: 'tabela-menor'
            }
        ],
        "language": {
                "decimal": ",",
                "thousands": ".",
                "sEmptyTable": "Nenhum ingrediente cadastrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "",
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

            }
    });
}