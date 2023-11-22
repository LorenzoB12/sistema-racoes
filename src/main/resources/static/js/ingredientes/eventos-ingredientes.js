$(function(){
    detectaClickCadastroIngrediente();
    detectaClickExcluirIngrediente();
    detectaClickEditarIngrediente();
    detectaClickConfirmaEdicaoIngrediente();
    detectaClickResetarCadastro();
})

const detectaClickCadastroIngrediente = () => {
    $("#btn-cadastrar-ingrediente").click(function(){
        let desIngrediente = $("#input-des-ingrediente").val().trim();
        let numLote = $("#input-num-lote").val().trim();
        let dtaValidade = $("#input-dta-validade").val();
        let codEan = $("#input-ean").val().trim();
        cadastrarIngrediente({desIngrediente, numLote, dtaValidade, codEan});
    });
}

const detectaClickExcluirIngrediente = () => {
    $("#table-ingredientes").on("click", ".btn-excluir-ingrediente", function(event){
        let id = $(this).attr("id");
        confirmaAcaoExecutaFuncao("Inativar Ingrediente", `Você deseja inativar o ingrediente ${id}?`, "Sim", "Não",
                                  "Operação cancelada!", `Ingrediente ${id} continua ativo`, () => inativarIngrediente(id))
    })
}

const detectaClickEditarIngrediente = () => {
    $("#table-ingredientes").on("click", ".btn-editar-ingrediente", function(event){
        let codIngrediente = $(this).attr("id");
        let linha = $(this).parent().parent();
        let desIngrediente = linha.find("td:nth-child(2)").text();
        let numLote = linha.find("td:nth-child(3)").text();
        let dtaValidade = formatarDataBrParaUs(linha.find("td:nth-child(4)").text());
        let codEan = linha.find("td:nth-child(5)").text().trim();

        $("#btn-cadastrar-ingrediente").attr("hidden", true);
        $("#btn-editar-ingrediente").attr("hidden", false);
        $("#btn-refresh-cadastro").attr("hidden", false);

        $("#input-cod-ingrediente").val(codIngrediente);
        $("#input-des-ingrediente").val(desIngrediente)
        $("#input-num-lote").val(numLote);
        $("#input-dta-validade").val(dtaValidade);
        $("#input-ean").val(codEan);

        piscarTelaCadastro();
    })
}

const detectaClickConfirmaEdicaoIngrediente = () => {
    $("#btn-editar-ingrediente").click(function(){
        let codIngrediente = $("#input-cod-ingrediente").val();
        let desIngrediente = $("#input-des-ingrediente").val()
        let numLote = $("#input-num-lote").val();
        let dtaValidade = $("#input-dta-validade").val();
        let codEan = $("#input-ean").val();
        editarIngrediente({codIngrediente, desIngrediente, numLote, dtaValidade, codEan})
    });
}

const detectaClickResetarCadastro = () => {
    $("#btn-refresh-cadastro").click(function(){
        limparCamposAposCadastro();
        resetarBotoesAposAlteracao();
    })
}