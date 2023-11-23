$(function(){
    detectaClickCadastrarReceita();
    detectaClickAdicionarIngredienteReceita();
    detectaClickAbreFechaCollapseCardConsulta();
    detectaClickBotaoConsultarReceitas();
    detectaClickEditarReceita();
    detectaClickBotaoRefreshCadastro();
    detectaClickBotaoSalvarEdicao();
    detectaClickBotaoExcluirReceita();
    detectaClickEditarReceitaIngrediente();
    detectaClickBotaoAbrirModalReordenarReceitas();
    detectaClickBotaoReordenarReceitas();
    detectaClickBotaoSalvarEdicaoIngredienteReceita();
    detectaClickBotaoExcluirIngredienteReceita();
    detectaClickBotaoRefreshCadastroIngredientesReceita();
})

const detectaClickCadastrarReceita = () => {
    $("#btn-cadastrar-receita").click(function(){
        let desReceita = $("#input-nome-receita").val();
        let codUsuarioInclusao = $("#cod-usuario").text();
        cadastrarReceita( {desReceita, codUsuarioInclusao} );
    });
}

const detectaClickAdicionarIngredienteReceita = () => {
    $("#table-receitas").on("click", ".btn-adicionar-ingrediente", function(){
        let codReceita = $(this).parent().parent().attr("id");
        let codIngrediente = $("#select-ingrediente-" + codReceita).val();
        let qtdKgs = $("#input-peso-ingrediente-" + codReceita).val();
        let codUsuarioInclusao = $("#cod-usuario").text();

        cadastrarItemReceita( {codReceita, codIngrediente, qtdKgs, codUsuarioInclusao} );
    })
}

const detectaClickAbreFechaCollapseCardConsulta = () => {
    $("#card-head-collapse-receitas").click(function(){
        alterarAberturaFechamentoCollapseCardConsulta();
    })
}

const detectaClickBotaoConsultarReceitas = () => {
    $("#btn-consultar-receitas").click(function(){
        let codReceita = $("#input-cod-receita-consulta").val();
        let desReceita = $("#input-des-receita-consulta").val();

        construirTabelaReceitas( {codReceita, desReceita} )
    })
}

const detectaClickEditarReceita = () => {
    $("#table-receitas").on("click", ".btn-editar-receita", function(){
        let linha = $(this).parent().parent();
        let codReceita = linha.find("td:nth-child(2)").text();
        let desReceita = linha.find("td:nth-child(3)").text();

        $("#input-cod-receita-hidden").val(codReceita);
        $("#input-nome-receita").val(desReceita);
        $("#btn-refresh-cadastro-receita").attr("hidden", false);
        $("#btn-salvar-edicao-receita").attr("hidden", false);
        $("#btn-cadastrar-receita").attr("hidden", true);

        piscarTelaCadastro();
    })
}

const detectaClickBotaoRefreshCadastro = () => {
    $("#btn-refresh-cadastro-receita").click(function(){
        limparCamposAposCadastroReceita();
    })
}

const detectaClickBotaoSalvarEdicao = () => {
    $("#btn-salvar-edicao-receita").click(function(){
        let codReceita = $("#input-cod-receita-hidden").val();
        let desReceita = $("#input-nome-receita").val();
        editarReceita( {codReceita, desReceita} )
    })
}

const detectaClickBotaoExcluirReceita = () => {
    $("#table-receitas").on("click", ".btn-excluir-receita", function(){
        let id = $(this).attr("id");
        confirmaAcaoExecutaFuncao("Excluir Receita", `Você deseja excluir a receita ${id} e todos os seus ingredientes?`, "Sim", "Não",
                                  "Operação cancelada!", `Receita ${id} não alterada`, () => excluirReceita(id))
    })
}

const detectaClickEditarReceitaIngrediente = () => {
    $("#table-receitas").on("click", ".btn-editar-receita-ingrediente", function(){
        let linha = $(this).parent().parent();
        let numSeq = linha.find("td:nth-child(1)").text();
        let codReceita = linha.parent().parent().attr("id").split("table-receita-ingrediente-")[1];
        let numOrdem = linha.find("td:nth-child(2)").text();
        let codIngrediente = linha.find("td:nth-child(3)").text();
        let qtdKgs = formatarNumeroParaUs(linha.find("td:nth-child(5)").text());

        $("#input-num-seq-edicao-item-receita-" + codReceita).val(numSeq);
        $("#input-peso-ingrediente-" + codReceita).val(qtdKgs);
        $("#select-ingrediente-" + codReceita).val(codIngrediente).change();
        $("#btn-adicionar-ingrediente-" + codReceita).attr("hidden", true);
        $("#btn-confirmar-edicao-ingrediente-" + codReceita).attr("hidden", false);
        $("#btn-refresh-cadastro-ingrediente-receita-" + codReceita).parent().attr("hidden", false);
    })
}

const detectaClickBotaoAbrirModalReordenarReceitas = () => {
    $("#table-receitas").on("click", ".btn-abrir-modal-reordenar-ingredientes-receita", function(){
        let codReceita = $(this).attr("id").split("btn-abrir-modal-reordenar-ingredientes-receita-")[1];
        $("#cod-receita-reordenacao").val(codReceita);
        listarItensReceita(codReceita);
        abrirFecharModal("#modal-reordenar-ingredientes-receitas");
    })
}

const detectaClickBotaoReordenarReceitas = () => {
    $("#btn-reordenar-itens-receita").click(function(){
        let codReceita = $("#cod-receita-reordenacao").val();
        let ordemIngredientes = $("#select-reordernar-ingredientes-receitas").val();
        confirmaAcaoExecutaFuncao("Alterar Ordem da Receita", `Você confirma que verificou a ordem da receita?`, "Sim", "Não",
                                          "Operação cancelada!", `Receita ${codReceita} não alterada`, () => reordenarIngredientesNaReceita( {codReceita, ordemIngredientes} ))
    })
}

const detectaClickBotaoSalvarEdicaoIngredienteReceita = () => {
    $("#table-receitas").on("click", ".btn-confirmar-edicao-ingrediente", function(){
        let codReceita = $(this).attr("id").split("btn-confirmar-edicao-ingrediente-")[1];
        let numSeq = $("#input-num-seq-edicao-item-receita-" + codReceita).val();
        let codIngrediente = $("#select-ingrediente-" + codReceita).val();
        let qtdKgs = $("#input-peso-ingrediente-" + codReceita).val();
        editarReceitaIngrediente({codReceita, numSeq, codIngrediente, qtdKgs})
    });
}

const detectaClickBotaoExcluirIngredienteReceita = () => {
    $("#table-receitas").on("click", ".btn-excluir-receita-ingrediente", function(){
        let numSeq = $(this).attr("id");
        deletarReceitaIngrediente(numSeq);
    })
}

const detectaClickBotaoRefreshCadastroIngredientesReceita = () => {
    $("#table-receitas").on("click", ".btn-refresh-cadastro-ingrediente-receita", function(){
        let codReceita = $(this).attr("id").split("btn-refresh-cadastro-ingrediente-receita-")[1];
        limparCamposAposCadastroReceitaIngrediente(codReceita);
    })
}