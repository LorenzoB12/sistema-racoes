$(function() {
    moment.locale("pt-BR");
    alterarAberturaFechamentoCollapseCardConsulta();
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

const limparCamposAposCadastroReceitaIngrediente = (id) => {
    $("#input-peso-ingrediente-" + id).val("");
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