function calcularNumeroPrimo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}

function calcularMaiorNumeroPrimo(minimo, maximo) {
  var maiorNumero = 0;
  for (var i = minimo; i < maximo; i++) {
    if (calcularNumeroPrimo(i)) {
      maiorNumero = i;
    }
  }
  return maiorNumero;
}
