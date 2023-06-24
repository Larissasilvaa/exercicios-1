function verificaPar(num) {
  return num % 2 === 0;
}

function verificarNumeroParArray(numeros) {
  var numerosPares = [];
  for (var i = 0; i < numeros.length; i++) {
    if (verificaPar(parseInt(numeros[i]))) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}
