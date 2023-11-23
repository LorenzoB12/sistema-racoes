$(function() {
    moment.locale("pt-BR");
    alterarAberturaFechamentoCollapseCardConsulta();
    permitirMoverModal();
})

const construirSelectListAdicionarItemReceita = (response, idReceita) => {
    let localAppendNumKgs = $("#div-peso-ingrediente-" + idReceita);
    let inputKgs = $("<input>").addClass("form-control input-perso5").attr("id", "input-peso-ingrediente-" + idReceita);
    inputKgs.attr("placeholder", "Quantidade de KGs").attr("type", "number");
    localAppendNumKgs.append(inputKgs);

    let localAppendSelect = $("#div-select-ingrediente-" + idReceita);
    let selectList = $("<select>").addClass("form-select input-perso5").attr("id", "select-ingrediente-" + idReceita);
    localAppendSelect.append(selectList);

    let localAppendNumOrdem = $("#div-select-num-ordem-" + idReceita);
    let inputNumOrdem = $("<input>").addClass("form-control input-perso5").attr("id", "input-num-ordem-" + idReceita);
    inputNumOrdem.attr("placeholder", "Nº Ordem").attr("type", "number").attr("min", 1);
    localAppendNumOrdem.append(inputNumOrdem);

    let optionNull = $("<option>").attr("value", 0).text("");
    selectList.append(optionNull);
    $.each(response, function(chave, valor){
        let optionText = valor.codIngrediente + " - " + valor.desIngrediente + " - " + valor.numLote + " - " + moment(valor.dtaValidade).format('L');
        let option = $("<option>").attr("value", valor.codIngrediente).text(optionText);
        selectList.append(option);
    })

    iniciarSelectLists();
}

const limparCamposAposCadastroReceita = () => {
    $("#input-nome-receita").val("");
    $("#input-cod-receita-hidden").val("");
    $("#btn-refresh-cadastro-receita").attr("hidden", true);
    $("#btn-salvar-edicao-receita").attr("hidden", true);
    $("#btn-cadastrar-receita").attr("hidden", false);
}

const limparCamposAposCadastroReceitaIngrediente = (codReceita) => {
    $("#input-peso-ingrediente-" + codReceita).val("");
    $("#input-num-seq-edicao-item-receita-" + codReceita).val("");
    $("#btn-adicionar-ingrediente-" + codReceita).attr("hidden", false);
    $("#btn-confirmar-edicao-ingrediente-" + codReceita).attr("hidden", true);
    $("#btn-refresh-cadastro-ingrediente-receita-" + codReceita).parent().attr("hidden", true);
}

const alterarAberturaFechamentoCollapseCardConsulta = () => {
    $("#card-body-collapse-receitas").collapse('toggle');
    $("#card-head-collapse-receitas i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $("#card-head-collapse-receitas").click(function() {
        $("#card-body-collapse-receitas").collapse('toggle');
        $("#card-head-collapse-receitas i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    })
}

const piscarTelaCadastro = () => {
    window.scroll(0, 0);
    $("#card-cadastro-receita").addClass("blink-card");
    setTimeout(() => $("#card-cadastro-receita").removeClass("blink-card"), 1000);
}

const iniciarSelectListReordenarIngredientes = (dados) => {
    let select = $("#select-reordernar-ingredientes-receitas");
    select.empty();
    $.each(dados, function(chave, valor){
        let option = $("<option>").text(valor.codIngrediente.codIngrediente + " - " + valor.codIngrediente.desIngrediente + " - Qtd: " + valor.qtdKgs + "Kgs");
        option.attr("value", valor.numSeq);
        option.attr("selected", true);
        select.append(option)
    });
    $('#select-reordernar-ingredientes-receitas').select2();
    $('#select-reordernar-ingredientes-receitas').select2Sortable();
}
