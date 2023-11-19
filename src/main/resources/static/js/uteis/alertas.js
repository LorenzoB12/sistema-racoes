//MÉTODO QUE DISPARA UM ALERT QUANDO NÃO PREENCHEMOS O CAMPO NA HORA DA PESQUISA
function preenchaParaPesquisar() {
	Swal.fire({
		text: "Preencha o campo para pesquisar!",
		icon: "warning",
		showCancelButton: false,
		confirmButtonColor: "#00B2B3",
		confirmButtonText: "OK"
	});
}

//MÉTODO QUE DISPARA UM ALERT QUANDO NÃO PREENCHEMOS TODOS OS CAMPOS EM UM CADASTRO
function preenchaParaPesquisarNecessarioArquivo() {
	Swal.fire({
		text: "Preencha todos os campos! Necessário anexar um arquivo!!!",
		icon: "warning",
		showCancelButton: false,
		confirmButtonColor: "#ff0000",
		confirmButtonText: "Ok"
	});
}

//MÉTODO QUE DISPARA UM ALERT CONFIRMANDO SUCESSO
function alertSucesso(mensagem) {
	Swal.fire({
		text: mensagem,
		icon: "success",
		showCancelButton: false,
		confirmButtonColor: "#00B2B3",
		confirmButtonText: "Ok"
	});
}

function alertSucessoFuncao(mensagem, funcaoCallback) {
	Swal.fire({
		text: mensagem,
		icon: "success",
		showCancelButton: false,
		confirmButtonColor: "#00B2B3",
		confirmButtonText: "Ok"
	}).then((result) => {
		if (result.isConfirmed) {
			if (typeof funcaoCallback === 'function') {
				funcaoCallback();
			}
		}
	});
}

//AVISO DE QUE O SISTEMA ESTÁ PROCESSANDO
function processandoRequisicao() {
	$.blockUI({
		message: '<h5>Aguarde, estamos processando sua requisição!</h5>', baseZ: 2000,
		css: {
			border: 'none',
			padding: '15px',
			backgroundColor: '#000',
			'-webkit-border-radius': '10px',
			'-moz-border-radius': '10px',
			opacity: .5,
			color: '#fff'
		}
	});
}

//AVISO DE QUE O SISTEMA ESTÁ PROCESSANDO
function processandoRequisicaoMinutos(minutos) {
	$.blockUI({
		message: `<h5>Aguarde, estamos processando sua requisição!</h5><br/><h5>O processo leva aproximadamente ${minutos} minutos!`, baseZ: 2000,
		css: {
			border: 'none',
			padding: '15px',
			backgroundColor: '#000',
			'-webkit-border-radius': '10px',
			'-moz-border-radius': '10px',
			opacity: .5,
			color: '#fff'
		}
	});
}

//AVISO DE NEGAÇÃO (X VERMELHO)
function avisoNegacao(mensagem) {
	Swal.fire({
		text: mensagem,
		icon: "warning",
		showCancelButton: false,
		confirmButtonColor: "#ff0000",
		confirmButtonText: "Ok"
	});
}

//SEM PERMISSÃO PARA EFETUAR TRANSAÇÃO
function usuarioSemPermissao() {
	Swal.fire({
		text: "Você não possui permissão para efetuar esta transação!",
		icon: "warning",
		showCancelButton: false,
		confirmButtonColor: "#ff0000",
		confirmButtonText: "Ok"
	});
}

function avisoInfo(titulo, mensagem) {
	Swal.fire({
		title: titulo,
		icon: 'info',
		text: mensagem,
		confirmButtonColor: "#00B2B3",
		showCloseButton: true
	})
}

function avisoInfoFuncao(titulo, mensagem, funcaoCallback) {
	Swal.fire({
		title: titulo,
		icon: 'info',
		text: mensagem,
		confirmButtonColor: "#00B2B3",
		showCloseButton: true
	}).then((result) => {
		if (result.isConfirmed) {
			if (typeof funcaoCallback === 'function') {
				funcaoCallback();
			}
		}
	});
}

function confirmaAcaoExecutaFuncao(titulo, texto, confTexto, negTexto, titNegacao, msgNegacao, funcao) {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	})
	swalWithBootstrapButtons.fire({
		title: titulo,
		text: texto,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: confTexto,
		cancelButtonText: negTexto,
		reverseButtons: true
	}).then((result) => {
		if (result.isConfirmed) {
			funcao()
		} else if (
			result.dismiss === Swal.DismissReason.cancel
		) {
			swalWithBootstrapButtons.fire(
				titNegacao,
				msgNegacao,
				'error'
			)
		}
	})
}

