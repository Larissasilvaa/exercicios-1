function inverterFrase(frase) {
  var fraseInversa = "";
  var fraseQuebrada = frase.split(" ");

  for (var i = fraseQuebrada.length - 1; i >= 0; i--) {
    fraseInversa += fraseQuebrada[i] + " ";
  }

  return fraseInversa;
}
