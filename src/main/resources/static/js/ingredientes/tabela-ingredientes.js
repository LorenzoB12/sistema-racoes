$(document).ready(function() {
    moment.locale("pt-BR");
    construirTabelaIngredientes();
})

function construirTabelaIngredientes(){
    $('#table-ingredientes').DataTable({
        destroy: true,
        searching : false,
        lengthMenu : [ 5, 10, 50, 100, 500 ],
        processing : true,
        serverSide : true,
        responsive : true,
        order: [0, 'asc'],
        ajax : {
            url : `/ingrediente/listar`,
            data : 'data'
        },

        columns : [
            {data : 'codIngrediente'},
            {data : 'desIngrediente'},
            {data : 'numLote'},
            {data : 'dtaValidade', render:
                function(dtaValidade){
                    return moment(dtaValidade).format('L');
                }
            },
            {data : 'codEan'},
            {orderable : false,	data : 'codIngrediente', "render" :
                function(id) {
                    return '<a class="btn btn-primary btn-sm btn-block btn-editar-ingrediente" id="'
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal"><i class="fa-solid fa-pencil"></i></a>';
                }
            },
            {orderable : false,	data : 'codIngrediente', "render" :
                function(id) {
                    return '<a class="btn btn-danger btn-sm btn-block btn-excluir-ingrediente" id="'
                    + id +'" role="button" data-toggle="modal" data-target="#confirm-modal"><i class="fas fa-times-circle"></i></a>';
                }
            }
        ],"language": {
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

            }
    });
}