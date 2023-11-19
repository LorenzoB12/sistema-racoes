$(function(){
    buscarUsuarios();
    $("#btn-cadastrar-usuario").click(cadastrarUsuario);
    detectaClickExcluirUsuario();
    detectaClickEditarUsuario();
    $("#btn-editar-usuario").click(enviarDadosEdicaoUsuario);
})

function detectaClickExcluirUsuario(){
    $("#table-usuarios").on("click", ".excluir-usuario", function(){
        let codUsuario = $(this).parent().parent().find("td:first-child").text();
        excluirUsuario(codUsuario);
    })
}

function detectaClickEditarUsuario(){
    $("#table-usuarios").on("click", ".editar-usuario", function(){
        let tr = $(this).parent().parent();
        let codUsuario = tr.find("td:first-child").text();
        let nomeUsuario = tr.find("td:nth-child(2)").text();
        let emailUsuario = tr.find("td:nth-child(3)").text();
        $("#btn-editar-usuario").attr("hidden", false);
        $("#btn-cadastrar-usuario").attr("hidden", true);
        $("#input-nome").val(nomeUsuario);
        $("#input-email").val(emailUsuario);
        $("#input-senha").val("");
        $("#cod-usuario-editar").val(codUsuario);
    })
}

function reinicarTelaCadastroUsuarios(){
    $("#btn-editar-usuario").attr("hidden", true);
    $("#btn-cadastrar-usuario").attr("hidden", false);
    $("#input-nome").val("");
    $("#input-email").val("");
    $("#input-senha").val("");
    $("#cod-usuario-editar").val("");
}