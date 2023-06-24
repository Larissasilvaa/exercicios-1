function inverterString(palavra) {
  var inversa = "";
  for (var i = palavra.length - 1; i >= 0; i--) {
    inversa += palavra[i];
  }
  return inversa;
}
