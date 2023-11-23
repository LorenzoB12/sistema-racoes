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
})

const detectaClickCadastrarReceita = () => {
    $("#btn-cadastrar-receita").click(function(){
        let desReceita = $("#input-nome-receita").val();
        let codUsuarioInclusao = $("#cod-usuario").text();
        cadastrarReceita( {desReceita, codUsuarioInclusao} );
    });
}

const detectaClickAdicionarIngredienteReceita = () => {
    $("#table-receitas").on("click", ".btn-editar-ingrediente", function(){
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
        console.log( {codReceita, desReceita} )
        editarReceita( {codReceita, desReceita} )
    })
}

const detectaClickBotaoExcluirReceita = () => {
    $("#table-receitas").on("click", ".btn-excluir-receita", function(){
        let id = $(this).attr("id");
        console.log(id)
        confirmaAcaoExecutaFuncao("Inativar Ingrediente", `Você deseja excluir a receita ${id} e todos os seus ingredientes?`, "Sim", "Não",
                                  "Operação cancelada!", `Receita ${id} não alterada`, () => excluirReceita(id))
    })
}

const detectaClickEditarReceitaIngrediente = () => {
    $("#table-receitas").on("click", ".btn-editar-receita-ingrediente", function(){
        let linha = $(this).parent().parent();
        let codReceita = linha.parent().parent().attr("id").split("table-receita-ingrediente-")[1];
        let numOrdem = linha.find("td:nth-child(1)").text();
        let codIngrediente = linha.find("td:nth-child(2)").text();
        let qtdKgs = linha.find("td:nth-child(4)").text();

        console.log({codReceita, numOrdem, codIngrediente, qtdKgs})
    })
}