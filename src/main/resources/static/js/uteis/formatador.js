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

function formatarNumero(number) {
  if (number == null || number == undefined) {
    return "";
  }

  // Arredonda o número para 2 casas decimais e converte para string
  const formattedNumber = Number(number).toFixed(2);

  // Separa as partes inteira e decimal
  const [integerPart, decimalPart] = formattedNumber.split(".");

  // Formata a parte inteira com pontos a cada 3 dígitos
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Retorna o número formatado com vírgula como separador decimal
  return `${formattedIntegerPart},${decimalPart}`;
}

function formatarNumeroParaUs(number) {
  if (number == null || number == undefined) {
    return "";
  }

  // Remove os pontos de milhares e substitui a vírgula por ponto
  const cleanedNumberString = number.toString().replace(/\./g, "").replace(",", ".");

  // Converte a string formatada para um número
  const formattedNumber = Number(cleanedNumberString);

  return formattedNumber;
}