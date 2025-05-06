const prompt = require("prompt-sync")();


// ================================
// Exercício 1 - Par ou Ímpar
// ================================
let num1 = parseInt(prompt("Ex. 1 - Digite um número inteiro: "));
console.log(num1 % 2 === 0 ? "É par" : "É ímpar");


// ================================
// Exercício 2 - Classificação por Idade
// ================================
let idade = parseInt(prompt("Ex. 2 - Digite sua idade: "));
if (idade < 12) console.log("Criança");
else if (idade < 18) console.log("Adolescente");
else if (idade < 60) console.log("Adulto");
else console.log("Idoso");


// ================================
// Exercício 3 - Classificação de Nota
// ================================
let nota = parseFloat(prompt("Ex. 3 - Digite sua nota (0 a 10): "));
if (nota >= 7) console.log("Aprovado");
else if (nota >= 5) console.log("Recuperação");
else console.log("Reprovado");


// ================================
// Exercício 4 - Menu com Switch
// ================================
console.log("Ex. 4 - Menu:\n1. Opção A\n2. Opção B\n3. Opção C");
let opcao = parseInt(prompt("Escolha uma opção (1-3): "));
switch (opcao) {
  case 1:
    console.log("Você escolheu a Opção A");
    break;
  case 2:
    console.log("Você escolheu a Opção B");
    break;
  case 3:
    console.log("Você escolheu a Opção C");
    break;
  default:
    console.log("Opção inválida");
}


// ================================
// Exercício 5 - IMC
// ================================
let peso = parseFloat(prompt("Ex. 5 - Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua altura (m): "));
let imc = peso / (altura * altura);
if (imc < 18.5) console.log("Baixo peso");
else if (imc < 25) console.log("Peso normal");
else if (imc < 30) console.log("Sobrepeso");
else console.log("Obesidade");


// ================================
// Exercício 6 - Tipo de Triângulo
// ================================
let a = parseFloat(prompt("Ex. 6 - Lado A: "));
let b = parseFloat(prompt("Lado B: "));
let c = parseFloat(prompt("Lado C: "));
if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) console.log("Equilátero");
  else if (a === b || a === c || b === c) console.log("Isósceles");
  else console.log("Escaleno");
} else {
  console.log("Não forma um triângulo");
}


// ================================
// Exercício 7 - Compra de Maçãs
// ================================
let qtdMacas = parseInt(prompt("Ex. 7 - Quantas maçãs? "));
let preco = qtdMacas < 12 ? 0.3 : 0.25;
console.log(`Valor total: R$ ${(qtdMacas * preco).toFixed(2)}`);


// ================================
// Exercício 8 - Ordem crescente
// ================================
let val1 = parseFloat(prompt("Ex. 8 - Primeiro valor: "));
let val2 = parseFloat(prompt("Segundo valor (diferente): "));
let menores = [val1, val2].sort((x, y) => x - y);
console.log(`Ordem crescente: ${menores[0]}, ${menores[1]}`);


// ================================
// Exercício 9 - Contagem Regressiva
// ================================
console.log("Ex. 9 - Contagem regressiva:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// ================================
// Exercício 10 - Repetir número
// ================================
let num10 = parseInt(prompt("Ex. 10 - Digite um número inteiro: "));
for (let i = 0; i < 10; i++) {
  console.log(num10);
}


// ================================
// Exercício 11 - Soma de 5 números
// ================================
let soma = 0;
for (let i = 1; i <= 5; i++) {
  soma += parseFloat(prompt(`Ex. 11 - Digite o ${i}º número: `));
}
console.log("Soma total:", soma);


// ================================
// Exercício 12 - Tabuada
// ================================
let numeroTabuada = parseInt(prompt("Ex. 12 - Digite um número para a tabuada: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}


// ================================
// Exercício 13 - Média de decimais
// ================================
let total = 0, count = 0, valor;
do {
  valor = parseFloat(prompt("Ex. 13 - Digite um número decimal (0 para sair): "));
  if (valor !== 0) {
    total += valor;
    count++;
  }
} while (valor !== 0);
console.log("Média:", count > 0 ? (total / count).toFixed(2) : 0);


// ================================
// Exercício 14 - Fatorial
// ================================
let numFatorial = parseInt(prompt("Ex. 14 - Digite um número para o fatorial: "));
let fatorial = 1;
for (let i = 2; i <= numFatorial; i++) {
  fatorial *= i;
}
console.log(`Fatorial de ${numFatorial} = ${fatorial}`);


// ================================
// Exercício 15 - Sequência de Fibonacci
// ================================
let fib = [0, 1];
while (fib.length < 10) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}
console.log("Ex. 15 - Sequência de Fibonacci:", fib.join(", "));