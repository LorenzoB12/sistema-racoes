const limparCamposAposCadastro = () => {
    $("#input-cod-ingrediente").val("");
    $("#input-des-ingrediente").val("");
    $("#input-num-lote").val("");
    $("#input-dta-validade").val("");
    $("#input-ean").val("");
}

const resetarBotoesAposAlteracao = () => {
    $("#btn-cadastrar-ingrediente").attr("hidden", false);
    $("#btn-editar-ingrediente").attr("hidden", true);
    $("#btn-refresh-cadastro").attr("hidden", true);
}

const piscarTelaCadastro = () => {
    $("#card-cadastro-ingrediente").addClass("blink-card");
    setTimeout(() => $("#card-cadastro-ingrediente").removeClass("blink-card"), 1000);
}
