function somarMediaArray(numeros) {
  var soma = 0;
  for (var i = 0; i < numeros.length; i++) {
    soma += parseInt(numeros[i]);
  }
  return soma / numeros.length;
}
