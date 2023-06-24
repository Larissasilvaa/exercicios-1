function verificaPar(num) {
  return num % 2 === 0;
}

function somaNumerosPares(valor) {
  var soma = 0;
  valor = valor.toString();
  for (var i = 0; i < valor.length; i++) {
  	var numeroInteiro = parseInt(valor[i]);
    if (verificaPar(numeroInteiro)) {
      soma += numeroInteiro;
    }
  }
  return soma;
}