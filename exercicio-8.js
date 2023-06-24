function calcularFibonacci(posicao) {
  if (posicao < 2) {
    return posicao;
  }

  return calcularFibonacci(posicao - 1) + calcularFibonacci(posicao - 2);
}
