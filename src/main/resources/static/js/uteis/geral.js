$(
	iniciarSelectLists()
)


//FUNÇÃO QUE FAZ COM QUE UM MODAL QUE ESTEJA SOBREPONDO OUTRO MODAL FAÇA COM QUE O MODAL SUBJACENTE SEJA ESMAECIDO TAMBÉM
$(document).on({
	'show.bs.modal': function() {
		var zIndex = 1040 + (10 * $('.modal:visible').length);
		$(this).css('z-index', zIndex);
		setTimeout(function() {
			$('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
		}, 0);
	},
	'hidden.bs.modal': function() {
		if ($('.modal:visible').length > 0) {
			// restore the modal-open class to the body element, so that scrolling works
			// properly after de-stacking a modal.
			setTimeout(function() {
				$(document.body).addClass('modal-open');
			}, 0);
		}
	}
}, '.modal');


//ABRE E FECHA MODAL COM JS DO BOOTSTRAP
function abrirFecharModal(idModal) {
	$(idModal).modal('toggle');
}


//LIMPAR TABELA CDN DATATABLES
function limparTabela(idTabela) {
	if ($.fn.DataTable.isDataTable(idTabela)) {
		var tabelaSacs = $(idTabela);
		tabelaSacs.DataTable().row().clear().draw();
	}
}


//INICIAR SELECT 2 NOS SELECT LISTS
function iniciarSelectLists() {
	$(document).ready(function() {
		$('select.form-select:not(.form-select-padrao)').select2({
			width: '100%',
			minimumResultsForSearch: 3,
			language: {
				noResults: function(params) {
					return "Nenhum resultado encontrado!";
				}
			}
		})
	})
}

//INICIAR TOOLTIP COM A MENSAGEM INDICADA
function iniciarTooltip(id, title) {
	$(`#${id}`).tooltip({
		title: title
	});
}

//INICIAR TOOLTIP COM A MENSAGEM INDICADA COM UMA CLASS COMO SELETOR
function iniciarTooltipClass(classe, title) {
	$(`.${classe}`).tooltip({
		title: title
	});
}

function formatarDataBrParaUs(dataBr) {
	var partes = dataBr.split('/');
	if (partes.length !== 3) {
		return null;
	}
	var dataUs = partes[2] + '-' + partes[1] + '-' + partes[0];
	return dataUs;
}

function formatarNumero(number) {
	if(number == null || number == undefined){
		return "";
	}

	// Converte o número para uma string e separa os decimais
	const parts = number.toString().split(".");

	// Formata a parte inteira com pontos a cada 3 dígitos
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	// Retorna o número formatado com vírgula como separador decimal
	return parts.join(",");
}
