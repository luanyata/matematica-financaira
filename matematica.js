/**
 * Retorna o valor convertido em real
 * @param {number} valor Valor a ser convertido
 * @returns Retorna o valor em real
 */
function formataMoeda(valor) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

/**
 * Retorna o valor em porcentagem
 * @param {number} porcentagem 
 * @returns retorna o valor em %
 */
function percent(porcentagem) {
  return (porcentagem / 100);
}

/**
 * Informa o Valor do desconto do produto
 * @param {number} valor valor do produto
 * @param {number} desconto valor do desconto
 * @returns Valor total em real do desconto
 */
function valorDesconto(valor, desconto) {
  return valor * percent(desconto);
}

/**
 * Informa o valor do produto com desconto
 * @param {number} valor valor do produto
 * @param {number} desconto valor do desconto
 * @returns Valor total em real do produto
 */
function valorRealComDesconto(valor, desconto) {
  return valor - valorDesconto(valor, desconto);
}

// Equivalentes
/**
 * Informa o valor total com base no valor e a porcentagem
 * @param {number} valor Valor fracional
 * @param {number} porcentagem Porcentagem fracional
 * @returns Valor total
 */
function valorRealAtravezDoFracional(valor, porcentagem) {
  return valor * 100 / porcentagem;
}

function valorRealAtravezDoFracionalV2(valor, porcentagem) {
  return valor / (percent(porcentagem));
}
//

/**
 * 
 * @param {number} valor Valor do produto
 * @param {number} taxa Taxa de juros em %
 * @returns Valor total do produto ao longo de um ano
 */
function valorFuturoAA(valor, taxa) {
  return valor * (1 + (percent(taxa)));
}

/**
 * Informa o valor do produto sem a rentabilidade
 * @param {number} valor Valor do produto
 * @param {number} rentabilidade Rentabilidade em %
 * @returns Valor do produto sem a rentabilidade
 */
function valorPassadoAA(valor, rentabilidade) {
  return valor / (percent((rentabilidade + 100)));
}

/**
 * Quanto porcento o ativo deve valorizar depois de uma queda de preço para ter um valor igual ao anterior
 * @param {number} valor Valor investido
 * @param {number} porcentagemPerdida Queda do ativo em %
 * @returns 
 */
function recuperacaoValor(valor, porcentagemPerdida) {
  const novoSaldo = valor * (1 + percent(porcentagemPerdida));
  return (valor / (novoSaldo) - 1) * 100;
}

/**
 * 
 * @param {number} capitalInicial Valor inicial do investimento
 * @param {number} taxa Taxa de juros em %
 * @param {number} tempo Tempo de investimento em meses 
 * @returns 
 */
function jurosSimples(capitalInicial, taxa, tempo) {
  const montante = capitalInicial * (1 + percent(taxa) * tempo)
  return montante
}

console.log(`O Desconto é de: ${formataMoeda(valorDesconto(2000, 10))}`);
console.log(`O Valor Total é de: ${formataMoeda(valorRealComDesconto(2000, 10))}`);

console.log(`O Valor total é de: ${formataMoeda(valorRealAtravezDoFracional(860000000, 30.73))}`);
console.log(`O Valor total é de: ${formataMoeda(valorRealAtravezDoFracionalV2(860000000, 30.73))}`);

console.log(`O Valor Futuro é de: ${formataMoeda(valorFuturoAA(1000, 40))}`);
console.log(`O Valor Passado é de: ${formataMoeda(valorPassadoAA(40.45, 1.2))}`);
console.log(`Valor Final: ${recuperacaoValor(1000, -5).toFixed(2)}%`);

console.log(`O Valor Futuro é de: ${formataMoeda(jurosSimples(1000, 10, 2))}`);
