function formatarTelefone(t) {
	
	t = t.replace(/\D/g, ""); //Remove tudo o que não é dígito
	t = t.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	t = t.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
	return t;
	
}

function somenteNumeros(n){
	
	n = n.replace(/\D/g, "");
	return n;
	
}